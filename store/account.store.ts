import { createStore } from 'zustand/vanilla'

export type AccountState = {
    username: string
    address: string
}

export const defaultAccountState: AccountState = {
    username: '',
    address: '',
};

export const initAccountStore = (): AccountState => {
    return {
        username: '',
        address: '',
    }
}

export type AccountAction = {
    removeAccount: () => void;
    updateAccount: (newVal: AccountState) => void;
}

export type AccountStore = AccountState & AccountAction

export const createAccountStore = (
    initState: AccountState = defaultAccountState
) => createStore<AccountStore>((set) => ({
    ...initState,
    removeAccount: () => set({ username: '', address: '' }),
    updateAccount: (newVal: AccountState) => set(newVal),
}));