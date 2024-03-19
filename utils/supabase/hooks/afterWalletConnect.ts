'use client'

import { createClient } from '../client'

export async function signup(address: string, username: string) {
  const supabase = createClient();
  const reqData = {
    password: address,
    email: `${username}@v50.cash`,
  }

  const { data, error } = await supabase.auth.signUp(reqData);

  return { data, error };
}

export async function login(address: string, username: string) {
  const supabase = createClient();
  const reqData = {
    password: address,
    email: `${username}@v50.cash`,
  }

  const { data, error } = await supabase.auth.signInWithPassword(reqData)

  return { data, error };

}
