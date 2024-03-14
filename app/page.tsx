import { TheFooter } from "@/components/kit/TheFooter";
import { TheHeader } from "@/components/kit/TheHeader";
import { TheAbout } from "@/components/kit/landing-page/TheAbout";
import { TheFeature } from "@/components/kit/landing-page/TheFeature";
import { TheHero } from "@/components/kit/landing-page/TheHero";
import { ThePricing } from "@/components/kit/landing-page/ThePricing";

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()
  
  return (
    <main className="flex min-h-screen flex-col items-start justify-center">

      <TheHeader />
      <TheHero />
      <TheFeature />
      <ThePricing />
      <TheAbout />
      <TheFooter />

    </main>
  );
}
