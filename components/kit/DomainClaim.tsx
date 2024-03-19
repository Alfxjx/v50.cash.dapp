'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react";
import { useAccountStore } from "@/provider/account.provider";
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';
import { createModal } from "@/context";

createModal();

export function DomainClaim() {
    const [inputName, setInputName] = useState('');
    const supbase = createClient();
    const { username: account_username, address: account_address, updateAccount } = useAccountStore((state) => state);
    const { open } = useWeb3Modal()
    const { isDisconnected, isConnected, isConnecting, address } = useAccount();

    const handleClaim = async () => {
        const { data: userData, error } = await supbase.from('users').select().eq('username', inputName);
        if (userData && userData.length > 0 && userData[0].username === inputName) {
            alert('This name has been claimed')
            return;
        }
        // 已连接钱包，表示注册或登录了。
        console.log(isConnected);
        
        if (isConnected) {
            const { status, error } = await supbase.from('users').update({ username: inputName, updated_at: new Date() }).eq('address', address);
            if (status === 204) {
                alert('Claimed successfully')
            }
        } else {
            open()
        }

    }

    useEffect(() => {
        (async () => {
            // 当连接上钱包的时候，将输入的名称也更新下
            if (isConnected && address) {
                const { data: userData, error } = await supbase.from('users').select().eq('address', address);
                if (error) {
                    alert('Error')
                    return;
                }
                if (userData && userData.length > 0 && userData[0].username) {
                    updateAccount({ username: inputName, address: userData[0].address })
                    const { status } = await supbase.from('users').update({ username: inputName }).eq('address', address);
                    if (status === 204) {
                        alert('Claimed successfully')
                    }
                }
            }

        })()
    }, [isConnected, address]);

    return (
        <div className="flex items-center justify-center text-lg md:py-4 md:px-8 p-2 bg-slate-100 rounded-full">
            <span className=" text-black font-semibold">v50.cash/to/</span>
            <Input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="outline-none border-none p-0 ml-2 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:italic placeholder:text-slate-400 placeholder:text-lg"
                type="text"
                placeholder="your-name"
            />
            <Button className="ml-2 rounded-full px-6" variant={'default'} onClick={() => handleClaim()}>Claim</Button>
        </div>
    );
}