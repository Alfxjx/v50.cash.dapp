'useClient'

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';

export function ConnectButton() {
    const { open } = useWeb3Modal()
    const { address, isConnecting, isDisconnected } = useAccount();
    const { disconnect } = useDisconnect();

    const handleWalletConnect = () => {
        if (isDisconnected) {
            open()
        } else {
            disconnect()
        }
    }

    return (
        <Button
            onClick={() => handleWalletConnect()}
        >
            {
                isConnecting
                    ? 'Connecting...'
                    : isDisconnected
                        ? 'Connect Wallet'
                        : <span title={address}>{address?.slice(0, 6) + '...' + address?.slice(-4)}</span>
            }
        </Button>
    )
}