import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from 'next/headers'
import "./globals.css";

import Web3ModalProvider from '@/context'
import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import { AccountStoreProvider } from "@/provider/account.provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "v50.cash",
  description: "Crypto-natively sponsor the next big thing. Cryptocurrency addresses too complex? Using v50.cash to easily build your own payment domain name!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          <AccountStoreProvider>
            {children}
          </AccountStoreProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
