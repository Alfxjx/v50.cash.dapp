'useClient'

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react';
import { signup, login } from '@/utils/supabase/hooks/afterWalletConnect';
import { createClient } from '@/utils/supabase/client';
import { createModal } from '@/context';
import { LogOut, Settings, User } from 'lucide-react';
import { useAccountStore } from '@/provider/account.provider';
import { create } from 'zustand';

function addressShortener(address: `0x${string}` | undefined) {
    if (!address) return 'Reconnect Wallet'
    return address?.slice(0, 6) + '...' + address?.slice(-4);
}

createModal();

export function ConnectButton() {
    const supabase = createClient();
    const { open } = useWeb3Modal()
    const { address, isConnecting, isDisconnected, isConnected } = useAccount();
    const { disconnect } = useDisconnect();

    const { username, address: wallet_address, updateAccount, removeAccount } = useAccountStore((state) => state);

    const handleWalletConnect = () => {
        open()
    }

    /* 
        1. 链接钱包，获取钱包地址
        2. 通过钱包地址查询用户信息
            1. 没有这个用户，则注册，邮箱是 钱包地址@v50.cash
                1. 注册成功之后，users添加这个用户
            2. 有这个用户，则登录
    */
    useEffect(() => {
        const updateAccountState = (username: string, address: string) => {
            updateAccount({ username, address });
        }
        (async () => {
            if (isConnected && address) {
                const { data: userData, error } = await supabase.from('users').select().eq('address', address);
                if (error) {
                    console.error(error)
                }
                if (!userData) {
                    console.error('No user data found');
                    return;
                }
                if (userData.length === 0) {
                    const { data, error: signUpError } = await signup(address, address.toString());
                    if (signUpError) {
                        console.error(signUpError);
                        return;
                    }
                    const email = await data.user?.email!;
                    const _usernameResp = email?.split('@')[0];
                    const { error: userInsertError } = await supabase.from('users').insert([
                        {
                            username: _usernameResp,
                            address: address,
                            email: email,
                            created_at: new Date(),
                            updated_at: new Date()
                        }
                    ]);
                    if (userInsertError) {
                        console.error(userInsertError);
                        return
                    }
                    updateAccountState(_usernameResp!, address);
                } else {
                    const realUsername = userData[0].username;
                    const { data, error: loginError } = await login(address, realUsername);
                    if (loginError) {
                        console.error(loginError);
                        return;
                    }
                    updateAccountState(realUsername, address);
                }

            }
        })()
    }, [isConnected]);



    if (isDisconnected) {
        return (
            <Button
                onClick={() => handleWalletConnect()}
            >Connect Wallet</Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button>{addressShortener(address)}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48'>
                <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Setting</span>
                    <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => disconnect()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>disconnect</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}