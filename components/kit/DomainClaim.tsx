'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DomainClaim() {
    return (
        <div className="flex items-center justify-center text-lg md:py-4 md:px-8 p-2 bg-slate-100 rounded-full">
            <span className=" text-black font-semibold">v50.cash/to/</span>
            <Input className="outline-none border-none p-0 ml-2 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:italic placeholder:text-slate-400 placeholder:text-lg" type="text" placeholder="your-name" />
            <Button className="ml-2 rounded-full px-6" variant={'default'}>Claim</Button>
        </div>
    );
}