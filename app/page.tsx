import { TheFooter } from "@/components/kit/TheFooter";
import { TheHeader } from "@/components/kit/TheHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center">

      <TheHeader />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-[720px] lg:max-w-[842px]">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">Sponsor the next big thing <span className="px-4 text-yellow-500">Crypto-Natively.</span>
            </h1>
            <div className="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
              <p className="text-xl text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
            </div>
            <div className="flex">
              <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(234,_179,_8)_6px_6px] md:mr-6">Connect wallet</a>
              <a href="#" className="flex max-w-full flex-row items-center rounded-xl border border-solid border-yellow-500 px-6 py-3 font-semibold text-yellow-500 [box-shadow:rgb(234,_179,_8)_6px_6px]">
                <p className="text-black">Sponsorship</p>
              </a>
            </div>
          </div>
          <div className="relative left-4 h-full max-h-[560px] w-[85%] lg:left-0 lg:w-full">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg" alt="" className="relative h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover" />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Features</h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">{"With v50.cash, Experience the power of innovation and simplicity in Crypto Donations today!"}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <div className="grid gap-8 p-8 md:p-10">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bda43ea08a612343b1f3_Vector-3.svg" alt="" className="inline-block h-8" />
            <p className="text-xl font-semibold">Easy to use</p>
            <p className="text-sm text-[#636262]">{"We've streamlined the entire donation process to make it as effortless as possible. With our intuitive interface, donors can contribute to your cause with just a few clicks. No complicated steps or confusing forms, just simplicity at its finest."}</p>
          </div>
          <div className="grid gap-8 p-8 md:p-10">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdb1bd05f5915d7bf31c_Vector-4.svg" alt="" className="inline-block h-8" />
            <p className="text-xl font-semibold">Customizable</p>
            <p className="text-sm text-[#636262]">{"We understand that every cause is unique, which is why we offer full customization options. Tailor your donation page to reflect your brand identity, add personalized messages, and showcase your mission in the most impactful way. With our platform, you have the freedom to create a donation experience that resonates with your audience."}</p>
          </div>
          <div className="grid gap-8 p-8 md:p-10">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg" alt="" className="inline-block h-8" />
            <p className="text-xl font-semibold">One Step Integration</p>
            <p className="text-sm text-[#636262]">{"Say goodbye to the hassle of integrating multiple systems. Our platform offers seamless integration with your existing website or social media channels in just one step. Whether you're a small nonprofit or a large organization, you can start accepting crypto donations instantly without any technical headaches."}</p>
          </div>
        </div>
      </div>


      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:py-32">
        <h2 className="text-center text-3xl font-bold md:text-5xl">Pricing</h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16">30 days money-back guarantee</p>
        <ul className="m-auto grid w-full grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:w-[70%]">
          <li className="flex max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] p-8">
            <div className="mb-4 rounded-md bg-[#f2f2f7] px-4 py-1.5">
              <h2 className="text-sm font-bold">BASIC</h2>
            </div>
            <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
            <p className="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">$99<span className="text-sm font-light">/year</span>
            </p>
            <a href="#" className="mb-5 flex w-full grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8">
              <div className="mr-6 font-bold">Get Started</div>
              <div className="h-4 w-4">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Premium Designs</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Exclusive Freebies</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Monthly Free Exclusive</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Customer Support</p>
            </div>
          </li>
          <li className="flex max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8">
            <div className="mb-4 rounded-md bg-[#abc4f5] px-4 py-1.5">
              <p className="text-sm font-bold">GROWTH</p>
            </div>
            <p className="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit</p>
            <h2 className="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8">$149<span className="text-sm font-light">/year</span>
            </h2>
            <a href="#" className="mb-5 flex w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mb-6 lg:mb-8">
              <div className="mr-6 font-bold">Get Started</div>
              <div className="h-4 w-4">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </a>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Premium Designs</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Exclusive Freebies</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Monthly Free Exclusive</p>
            </div>
            <div className="mt-2 flex flex-row items-center text-left">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_911_1122)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="">Customer Support</p>
            </div>
          </li>
        </ul>
      </div>

      
  <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-20 lg:py-24">
    <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center rounded-md bg-[#c4c4c4] px-3 py-1">
          <div className="mr-1 h-2 w-2 rounded-full bg-black"></div>
          <p className="text-sm">Available for work</p>
        </div>
        <p className="text-sm text-[#808080] sm:text-xl">Developer &amp; UX Specialist</p>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">Jonathan Smith</h1>
        <p className="text-sm text-[#808080] sm:text-xl">Consectetur adipiscing elit duis tristique sollicitudin nibh. Augue mauris augue neque gravida in fermentum. Sapien pellentesque habitant morbi tristique pellentesque.</p>
        <div className="mb-8 mt-8 h-px w-full bg-black"></div>
        <div className="mb-6 flex flex-col gap-2 text-sm text-[#808080] sm:text-base lg:mb-8">
          <p>
            <strong>2020: </strong>Site of the year in Awwwards.com
          </p>
          <p>
            <strong>2020: </strong>Site of the year in Awwwards.com
          </p>
        </div>
        <a href="#" className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12">
          <p>All Achievements</p>
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg" alt="" className="inline-block" />
        </a>
        <div className="flex flex-col gap-4 font-semibold sm:flex-row">
          <a href="#" className="flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg" alt="" className="inline-block" />
            <p>Email Me</p>
          </a>
          <a href="#" className="flex gap-4 rounded-md border border-solid border-black px-6 py-3">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg" alt="" className="inline-block" />
            <p>Resume</p>
          </a>
        </div>
      </div>
      <div className="min-h-[530px] overflow-hidden rounded-md bg-[#f2f2f7]"></div>
    </div>
  </div>


      <TheFooter />

    </main>
  );
}
