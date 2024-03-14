'use client'

export function TheHeader() {
    return (

        <div className="h-auto w-full">
            <nav className="font-inter mx-auto h-auto w-full max-w-[1400px] lg:relative lg:top-0" >
                <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
                    <a href="#">
                        <svg className="relative left-5 lg:inset-0" width="127" height="27" viewBox="0 0 127 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.756 7.7488C13.5232 7.80968 14.2294 7.87057 14.9357 7.93146C15.094 7.94363 15.2523 7.96799 15.3863 8.02887C15.6542 8.13847 15.7881 8.35766 15.8125 8.66208C15.8368 9.06393 15.7638 9.44142 15.6176 9.80673C15.4472 10.2451 15.2645 10.6713 15.0575 11.0853C14.5582 12.1082 14.0102 13.1067 13.4136 14.0809C12.2324 15.9805 11.0634 17.868 9.91873 19.792C9.37076 20.7053 8.92021 21.6673 8.40877 22.5927C7.89733 23.5304 7.36154 24.468 6.8501 25.4056C6.57002 25.9293 6.09511 26.185 5.5715 26.3433C4.96264 26.5259 4.32943 26.1606 4.1346 25.5518C3.98847 25.089 3.97629 24.6141 4.15895 24.1757C4.48773 23.3842 4.86522 22.6171 5.24272 21.8499C5.36449 21.6064 5.55932 21.4115 5.80286 21.2654C6.16818 21.0462 6.36301 21.1193 6.46043 21.5211C6.47261 21.5577 6.47261 21.5942 6.49696 21.6916C6.5822 21.5698 6.64309 21.4968 6.69179 21.4115C7.50766 20.0964 8.25047 18.7326 8.92021 17.3322C9.96744 15.1403 11.1364 13.0215 12.3055 10.8905C12.4759 10.5739 12.6829 10.2816 12.8656 9.96504C12.9143 9.8798 12.963 9.80673 13.0239 9.69714C12.5977 9.67278 12.208 9.64843 11.8305 9.62408C11.7209 9.6119 11.6601 9.67278 11.5992 9.7702C11.4531 10.0016 11.3069 10.2329 11.1608 10.4643C10.8564 10.9757 10.4058 11.2071 9.80914 11.1584C9.63866 11.1462 9.456 11.1462 9.28552 11.0975C8.82279 10.9879 8.59143 10.5739 8.7132 10.1112C8.74973 9.97721 8.81061 9.85544 8.8715 9.73367C10.0283 7.66356 11.173 5.60562 12.342 3.54769C12.6829 2.95101 13.0726 2.37868 13.4379 1.78201C13.4866 1.69677 13.5353 1.6237 13.5962 1.51411C13.4257 1.50193 13.304 1.50193 13.17 1.47758C12.8656 1.42887 12.7073 1.25839 12.6708 0.990492C12.6464 0.783481 12.7195 0.649532 12.9143 0.564292C13.0361 0.515584 13.1213 0.430344 13.2187 0.357281C13.3283 0.272041 13.4866 0.186801 13.6328 0.186801C14.2173 0.15027 14.7774 0.125916 15.3497 0.125916C15.5567 0.125916 15.7759 0.162447 15.9829 0.211155C16.4091 0.308572 16.604 0.625178 16.4822 1.0392C16.4213 1.25839 16.3239 1.47758 16.19 1.67241C15.715 2.32998 15.301 3.03625 14.9357 3.77905C14.3147 5.0333 13.6449 6.25101 12.9265 7.44437C12.8778 7.52961 12.8291 7.61485 12.756 7.7488Z" fill="black" />
                            <path d="M4.22419 12.741L4.13819 12.311L3.70064 12.3402C3.65961 12.3429 3.61905 12.3457 3.57889 12.3483C3.25783 12.3699 2.96224 12.3898 2.65726 12.4003L2.64924 12.4005L2.64123 12.4011C2.09299 12.4376 1.53795 12.4738 0.9962 12.4979L0.982396 12.4985L0.968647 12.4999C0.880185 12.5087 0.804086 12.5087 0.715687 12.4999C0.603298 12.4883 0.554419 12.4447 0.533493 12.4157C0.512435 12.3865 0.486983 12.3264 0.50743 12.22L0.508414 12.2162L0.515757 12.2051L0.535766 12.1527C1.09518 10.6858 1.49074 9.18764 1.85674 7.69931C2.26997 6.05859 2.69545 4.4174 3.12125 2.78718C3.16238 2.63451 3.20662 2.48108 3.25232 2.32268L3.25292 2.32061C3.29781 2.16498 3.34411 2.00446 3.38758 1.84319C3.43302 1.68568 3.48879 1.59864 3.53939 1.54977C3.58331 1.50734 3.65129 1.46586 3.78513 1.45158C4.00364 1.42969 4.22002 1.40074 4.42652 1.3731C4.45938 1.3687 4.49199 1.36434 4.52432 1.36004C4.76296 1.32832 4.99007 1.29972 5.21699 1.28258C7.4223 1.1477 9.62453 0.90288 11.8032 0.647291C12.3424 0.587402 12.8943 0.5394 13.4347 0.503357C13.5895 0.493764 13.7279 0.504729 13.846 0.536218L13.846 0.536408L13.8596 0.539641C13.9541 0.562026 13.9885 0.606033 14.0026 0.635669C14.0182 0.668677 14.0307 0.732612 13.9922 0.825635C13.9537 0.908689 13.8969 0.992177 13.8088 1.11803L13.8031 1.1261L13.7978 1.13438C13.7387 1.22642 13.6784 1.31924 13.6176 1.41276C13.4595 1.65621 13.2984 1.90441 13.1456 2.15597L13.1456 2.15595L13.1423 2.16147C12.9846 2.42887 12.8285 2.69523 12.6729 2.96066C12.2727 3.6435 11.876 4.32013 11.4658 4.99223C10.8953 5.92686 10.3125 6.86184 9.72818 7.79915C9.56142 8.06115 9.39426 8.31192 9.22378 8.56764L9.46933 8.73133L9.22378 8.56764C9.18029 8.63288 9.13492 8.70926 9.08731 8.78941C9.07197 8.81524 9.0564 8.84145 9.04058 8.86781L8.58623 9.62506H9.46933H9.47004H9.47075H9.47146H9.47217H9.47288H9.47359H9.4743H9.475H9.4757H9.47641H9.47711H9.47781H9.47851H9.47921H9.47991H9.4806H9.4813H9.48199H9.48269H9.48338H9.48407H9.48476H9.48545H9.48614H9.48682H9.48751H9.48819H9.48888H9.48956H9.49024H9.49092H9.4916H9.49228H9.49296H9.49363H9.49431H9.49498H9.49566H9.49633H9.497H9.49767H9.49834H9.49901H9.49967H9.50034H9.50101H9.50167H9.50233H9.50299H9.50365H9.50431H9.50497H9.50563H9.50629H9.50694H9.5076H9.50825H9.50891H9.50956H9.51021H9.51086H9.51151H9.51216H9.5128H9.51345H9.5141H9.51474H9.51538H9.51602H9.51667H9.51731H9.51795H9.51858H9.51922H9.51986H9.52049H9.52113H9.52176H9.52239H9.52303H9.52366H9.52429H9.52492H9.52554H9.52617H9.5268H9.52742H9.52805H9.52867H9.52929H9.52991H9.53053H9.53115H9.53177H9.53239H9.53301H9.53362H9.53424H9.53485H9.53547H9.53608H9.53669H9.5373H9.53791H9.53852H9.53913H9.53974H9.54034H9.54095H9.54155H9.54216H9.54276H9.54336H9.54396H9.54456H9.54516H9.54576H9.54636H9.54695H9.54755H9.54814H9.54874H9.54933H9.54992H9.55052H9.55111H9.5517H9.55228H9.55287H9.55346H9.55405H9.55463H9.55522H9.5558H9.55639H9.55697H9.55755H9.55813H9.55871H9.55929H9.55987H9.56044H9.56102H9.5616H9.56217H9.56275H9.56332H9.56389H9.56446H9.56504H9.56561H9.56618H9.56674H9.56731H9.56788H9.56845H9.56901H9.56958H9.57014H9.5707H9.57127H9.57183H9.57239H9.57295H9.57351H9.57407H9.57463H9.57518H9.57574H9.5763H9.57685H9.57741H9.57796H9.57851H9.57907H9.57962H9.58017H9.58072H9.58127H9.58181H9.58236H9.58291H9.58346H9.584H9.58455H9.58509H9.58563H9.58618H9.58672H9.58726H9.5878H9.58834H9.58888H9.58942H9.58996H9.59049H9.59103H9.59157H9.5921H9.59264H9.59317H9.5937H9.59423H9.59477H9.5953H9.59583H9.59636H9.59689H9.59741H9.59794H9.59847H9.599H9.59952H9.60005H9.60057H9.6011H9.60162H9.60214H9.60266H9.60318H9.6037H9.60422H9.60474H9.60526H9.60578H9.6063H9.60681H9.60733H9.60785H9.60836H9.60888H9.60939H9.6099H9.61042H9.61093H9.61144H9.61195H9.61246H9.61297H9.61348H9.61399H9.61449H9.615H9.61551H9.61601H9.61652H9.61702H9.61753H9.61803H9.61854H9.61904H9.61954H9.62004H9.62054H9.62104H9.62154H9.62204H9.62254H9.62304H9.62354H9.62403H9.62453H9.62502H9.62552H9.62601H9.62651H9.627H9.6275H9.62799H9.62848H9.62897H9.62946H9.62995H9.63044H9.63093H9.63142H9.63191H9.6324H9.63289H9.63337H9.63386H9.63435H9.63483H9.63532H9.6358H9.63628H9.63677H9.63725H9.63773H9.63822H9.6387H9.63918H9.63966H9.64014H9.64062H9.6411H9.64158H9.64205H9.64253H9.64301H9.64349H9.64396H9.64444H9.64491H9.64539H9.64586H9.64634H9.64681H9.64728H9.64776H9.64823H9.6487H9.64917H9.64964H9.65011H9.65058H9.65105H9.65152H9.65199H9.65246H9.65293H9.6534H9.65386H9.65433H9.6548H9.65526H9.65573H9.65619H9.65666H9.65712H9.65759H9.65805H9.65851H9.65898H9.65944H9.6599H9.66036H9.66082H9.66128H9.66175H9.6622H9.66266H9.66312H9.66358H9.66404H9.6645H9.66496H9.66542H9.66587H9.66633H9.66679H9.66724H9.6677H9.66815H9.66861H9.66906H9.66952H9.66997H9.67043H9.67088H9.67133H9.67179H9.67224H9.67269H9.67314H9.67359H9.67404H9.67449H9.67495H9.6754H9.67585H9.6763H9.67674H9.67719H9.67764H9.67809H9.67854H9.67899H9.67943H9.67988H9.68033H9.68077H9.68122H9.68167H9.68211H9.68256H9.683H9.68345H9.68389H9.68434H9.68478H9.68523H9.68567H9.68611H9.68656H9.687H9.68744H9.68788H9.68833H9.68877H9.68921H9.68965H9.69009H9.69053H9.69097H9.69141H9.69185H9.69229H9.69273H9.69317H9.69361H9.69405H9.69449H9.69493H9.69537H9.69581H9.69624H9.69668H9.69712H9.69756H9.69799H9.69843H9.69887H9.69931H9.69974H9.70018H9.70061H9.70105H9.70149H9.70192H9.70236H9.70279H9.70323H9.70366H9.7041H9.70453H9.70496H9.7054H9.70583H9.70627H9.7067H9.70713H9.70757H9.708H9.70843H9.70887H9.7093H9.70973H9.71016H9.7106H9.71103H9.71146H9.71189H9.71233H9.71276H9.71319H9.71362H9.71405H9.71448H9.71491H9.71534H9.71577H9.71621H9.71664H9.71707H9.7175H9.71793H9.71836H9.71879H9.71922H9.71965H9.72008H9.72051H9.72094H9.72137H9.7218H9.72223H9.72266H9.72309H9.72351H9.72394H9.72437H9.7248H9.72523H9.72566H9.72609H9.72652H9.72695H9.72738H9.7278H9.72823H9.72866H9.72909H9.72952H9.72995H9.73037H9.7308H9.73123H9.73166H9.73209H9.73252H9.73294H9.73337H9.7338H9.73421C10.2401 9.63115 10.7458 9.63419 11.2497 9.63723L11.2503 9.63723C11.7559 9.64028 12.2597 9.64331 12.7633 9.64938L12.7633 9.64942H12.7693C12.7958 9.64942 12.8415 9.65444 12.9064 9.66498C13.0003 9.68688 13.0425 9.73238 13.0607 9.76579C13.0794 9.80009 13.0945 9.86158 13.0583 9.95454L13.0576 9.95627C13.0279 10.0336 12.9645 10.1264 12.8573 10.2575L12.8515 10.2646L12.846 10.2718C12.6841 10.4851 12.5186 10.7 12.3519 10.9164C12.0139 11.3553 11.6709 11.8006 11.3424 12.2523C11.0919 12.5952 10.8721 12.9713 10.6821 13.3385C9.6959 15.2135 8.721 17.078 7.75796 18.9675C7.1589 20.1291 6.56671 21.3032 5.97659 22.4731C5.58339 23.2527 5.19112 24.0304 4.79833 24.8014L4.79665 24.8048C4.73152 24.935 4.67495 25.0241 4.61024 25.0889L4.61016 25.0888L4.6031 25.0961C4.54337 25.1584 4.503 25.162 4.48403 25.1617C4.45758 25.1612 4.39776 25.1489 4.31827 25.0765C4.18442 24.9493 4.12998 24.8253 4.12387 24.6788L4.12403 24.6788L4.1232 24.6663C4.11725 24.5771 4.11108 24.4886 4.10495 24.4008C4.07251 23.9356 4.0414 23.4896 4.05113 23.0422L4.05116 23.0405C4.06938 22.0446 4.09671 21.0484 4.12412 20.0495L4.12415 20.0483C4.15153 19.0505 4.17898 18.0501 4.19729 17.0493L4.19729 17.0492C4.21358 16.1452 4.21902 15.2387 4.22445 14.3357C4.22699 13.9121 4.22954 13.4892 4.23319 13.0678C4.24919 12.9963 4.24934 12.9335 4.24663 12.8901C4.2428 12.8289 4.22898 12.7637 4.22507 12.7452C4.22466 12.7433 4.22436 12.7419 4.22419 12.741Z" fill="white" stroke="black" />
                            <path d="M23.2539 4.68068V18.0444H26.1557V12.6798H34.2313V10.0644H26.1557V7.31525H34.6322V4.68068H23.2539Z" fill="black" />
                            <path d="M38.5906 18.0444V4.31795H35.7078V18.0444H38.5906Z" fill="black" />
                            <path d="M45.4489 7.14343C42.2034 7.14343 39.4925 8.9189 39.4925 12.6035C39.4925 16.3071 42.2034 18.0444 45.4489 18.0444C48.7135 18.0444 51.4244 16.3644 51.4244 12.6035C51.4244 8.88072 48.7135 7.14343 45.4489 7.14343ZM45.4489 15.4099C43.6353 15.4099 42.3371 14.608 42.3371 12.6035C42.3371 10.5798 43.6353 9.79709 45.4489 9.79709C47.2816 9.79709 48.5798 10.618 48.5798 12.6035C48.5798 14.5317 47.2816 15.4099 45.4489 15.4099Z" fill="black" />
                            <path d="M66.518 7.33434L64.0361 15.2189L61.5925 7.33434H58.767L56.3424 15.2189L53.8606 7.33434H50.9397L54.2997 18.0444H58.2325L60.1797 11.7062L62.1461 18.0444H66.0789L69.4389 7.33434H66.518Z" fill="black" />
                            <path d="M74.9368 11.5535L74.6887 11.5344C72.8177 11.248 72.4932 10.9807 72.4932 10.5035C72.4932 10.1789 72.8368 9.58709 74.4596 9.58709C76.1396 9.58709 76.865 10.0453 76.865 10.8853V10.9807H79.8241V10.8853C79.8241 9.24345 78.8887 7.27707 74.4596 7.27707C70.3359 7.27707 69.4768 9.05254 69.4768 10.5416C69.4768 12.6798 71.3859 13.3671 74.4596 13.768C74.6123 13.7871 74.765 13.8062 74.9177 13.8253C76.0823 13.9589 77.1132 14.1117 77.1132 14.9135C77.1132 15.6199 76.0059 15.7726 74.8414 15.7726C72.9132 15.7726 72.2259 15.3526 72.2259 14.4362V14.3408H69.2477V14.5508C69.2286 15.1044 69.2286 16.0017 69.9732 16.7462C70.8323 17.6053 72.4932 18.0444 74.9177 18.0444C78.2014 18.0444 80.1105 17.529 80.1105 14.8753C80.1105 12.3362 77.3614 11.9162 74.9368 11.5535Z" fill="black" />
                            <path d="M88.1297 7.35343C86.1442 7.35343 84.9224 7.98344 84.1969 8.9189H84.0442V7.35343H81.1423V22.1299H84.0442V16.5744H84.1778C84.9033 17.5099 86.1251 18.0826 88.1297 18.0826C92.6351 18.0826 93.1315 14.1498 93.1315 12.718C93.1315 11.1526 92.6542 7.35343 88.1297 7.35343ZM87.2896 15.5817C84.7696 15.5817 84.2542 14.3408 84.2542 12.718C84.2542 11.2671 84.7696 9.85436 87.2896 9.85436C90.0578 9.85436 90.3633 11.878 90.3633 12.718C90.3633 13.4817 90.0578 15.5817 87.2896 15.5817Z" fill="black" />
                            <path d="M102.586 8.9189C101.86 7.96435 100.658 7.33434 98.6722 7.33434C94.1477 7.33434 93.6704 11.1335 93.6704 12.6989C93.6704 14.1308 94.1667 18.0444 98.6531 18.0444C100.677 18.0444 101.899 17.4908 102.624 16.5553H102.72V18.0444H105.621V7.33434H102.72V8.9189H102.586ZM99.5122 15.5626C96.744 15.5626 96.4386 13.4626 96.4386 12.6989C96.4386 11.8589 96.725 9.83527 99.5122 9.83527C102.013 9.83527 102.529 11.248 102.529 12.6989C102.529 14.3217 102.013 15.5626 99.5122 15.5626Z" fill="black" />
                            <path d="M112.87 7.33434C111.018 7.33434 110.369 7.88798 109.758 8.9189H109.586V7.33434H106.684V18.0444H109.586V13.2526C109.586 11.8016 110.216 10.1216 112.373 10.1216C113.29 10.1216 114.034 10.2744 114.301 10.3507L114.76 7.62071C114.263 7.50616 113.633 7.33434 112.87 7.33434Z" fill="black" />
                            <path d="M126.998 7.33434H122.97L118.255 11.9926V4.26068H115.372V18.0253H118.255V15.9444L120.336 13.8826L123.352 18.0444H126.96L122.455 11.8207L126.998 7.33434Z" fill="black" />
                        </svg>
                    </a>
                    <div className="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0" >
                        <a href="#" className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">Features</a>
                        <a href="#" className="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800">Pricing</a>
                        <a href="#" className="font-inter rounded-lg pb-8 lg:px-6 lg:py-4 lg:pb-0 lg:hover:bg-gray-50 lg:hover:text-gray-800">About</a>
                    </div>
                    <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
                    <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(234,_179,_8)_6px_6px] md:mr-6">Connect wallet</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}