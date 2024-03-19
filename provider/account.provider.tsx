'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type StoreApi, useStore } from 'zustand';

import { type AccountStore, createAccountStore, initAccountStore } from '@/store/account.store'

export const AccountStoreContext = createContext<StoreApi<AccountStore> | null>(null);

export interface CounterStoreProviderProps {
  children: ReactNode
}

export const AccountStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AccountStore>>()
  if (!storeRef.current) {
    storeRef.current = createAccountStore(initAccountStore())
  }

  return (
    <AccountStoreContext.Provider value={storeRef.current}>
      {children}
    </AccountStoreContext.Provider>
  )
}

export const useAccountStore = <T,>(
  selector: (store: AccountStore) => T,
): T => {
  const accountStoreContext = useContext(AccountStoreContext)

  if (!accountStoreContext) {
    throw new Error(`useAccountStore must be use within CounterStoreProvider`)
  }

  return useStore(accountStoreContext, selector)
}