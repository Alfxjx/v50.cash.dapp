'use client'
import { FaTools } from "react-icons/fa";
import { TbPlugConnected } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";

export function TheFeature() {
    return (
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:py-20" id="features">
            <div className="text-center">
                <h2 className="text-3xl font-bold md:text-5xl">Features</h2>
                <p className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">{"With v50.cash, Experience the power of innovation and simplicity in Crypto Donations today!"}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col p-8 md:p-10">
                    <FaRegLightbulb className="text-4xl h-8 mb-6" />
                    <p className="text-xl font-semibold mb-6">Easy to use</p>
                    <p className="text-sm text-[#636262]">{"We've streamlined the entire donation process to make it as effortless as possible. With our intuitive interface, donors can contribute to your cause with just a few clicks. No complicated steps or confusing forms, just simplicity at its finest."}</p>
                </div>
                <div className="flex flex-col p-8 md:p-10">
                    <FaTools className="text-4xl h-8 mb-6" />
                    <p className="text-xl font-semibold mb-6">Customizable</p>
                    <p className="text-sm text-[#636262]">{"We understand that every cause is unique, which is why we offer full customization options. Tailor your donation page to reflect your brand identity, add personalized messages, and showcase your mission in the most impactful way. With our platform, you have the freedom to create a donation experience that resonates with your audience."}</p>
                </div>
                <div className="flex flex-col p-8 md:p-10">
                    <TbPlugConnected className="text-4xl h-8 mb-6" />
                    <p className="text-xl font-semibold mb-6">One Step Integration</p>
                    <p className="text-sm text-[#636262]">{"Say goodbye to the hassle of integrating multiple systems. Our platform offers seamless integration with your existing website or social media channels in just one step. Whether you're a small nonprofit or a large organization, you can start accepting crypto donations instantly without any technical headaches."}</p>
                </div>
            </div>
        </div>
    )
}