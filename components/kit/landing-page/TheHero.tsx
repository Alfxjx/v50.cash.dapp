'use client'

import { DomainClaim } from "../DomainClaim"

export function TheHero() {
    return (
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:py-32">
            <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
                <div className="max-w-[720px] lg:max-w-[842px]">
                    <h1 className="mb-4 text-4xl font-semibold md:text-6xl flex-col">
                        <span className="text-yellow-500">Crypto-natively</span>
                        <span> sponsor the next big thing</span>
                    </h1>
                    <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                        <p className="text-xl text-[#636262]">Cryptocurrency addresses too complex? Using v50.cash to easily build your own payment domain name!</p>
                    </div>
                    <div className="flex mt-8 mx-auto">
                        <DomainClaim></DomainClaim>
                    </div>
                </div>
                <div className="relative left-4 h-full max-h-[560px] w-[85%] lg:left-0 lg:w-full">
                    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg" alt="" className="relative h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover" />
                    <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 rounded-2xl bg-black"></div>
                </div>
            </div>
        </div>
    )
}