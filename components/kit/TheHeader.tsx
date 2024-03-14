'use client'
import { Button } from '../ui/button';
import { ConnectButton } from './ConnectButton';
import { BiBitcoin } from "react-icons/bi";

export function TheHeader() {
    return (

        <div className="h-auto w-full">
            <nav className="font-inter mx-auto h-auto w-full max-w-[1400px] lg:relative lg:top-0" >
                <div className="flex flex-row px-6 py-6 lg:items-center justify-between lg:px-10 lg:py-4 xl:px-20">
                    <a href="#">
                        <BiBitcoin className="text-4xl text-primary" />
                    </a>
                    <div className="hidden md:flex space-y-8 md:mt-0 md:flex-row md:space-x-1 md:space-y-0" >
                        <a href="#features"><Button variant={'ghost'}>Features</Button></a>
                        <a href="#pricing"><Button variant={'ghost'}>Pricing</Button></a>
                        <a href="#about"><Button variant={'ghost'}>About</Button></a>
                    </div>
                    <div className="flex space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
                        <ConnectButton />
                    </div>
                </div>
            </nav>
        </div>
    );
}