'use client'
import { BiBitcoin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export function TheFooter() {
    return (
        <footer className="w-full bg-black bg-cover bg-center text-white" >
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-24">
                <div className="flex flex-col items-center">
                    <div className="mb-8 max-w-full flex items-center text-2xl">
                        <BiBitcoin className="text-4xl" />
                    </div>
                    <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-yellow-500">About</a>
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-yellow-500">Features</a>
                        <a href="#" className="inline-block px-6 py-2 font-normal transition hover:text-yellow-500">Help</a>
                    </div>
                    <div className="mb-8 mt-8 w-48 border-b border-solid border-b-white"></div>
                    <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-3 gap-3">
                        <a href="#" className="ifont-bold mx-auto flex max-w-[24px] flex-col">
                            <FaXTwitter />
                        </a>
                        <a href="#" className="mx-auto flex max-w-[24px] flex-col font-bold">
                            <FaGithub />
                        </a>
                        <a href="#" className="ifont-bold mx-auto flex max-w-[24px] flex-col">
                            <BiBitcoin />
                        </a>
                    </div>
                    <p className="max-[479px]:text-sm">© Copyright 2024. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}