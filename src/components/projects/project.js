import React from "react";
export default function Project() {
    const major = [{
        "imglink": "/safescape.jpeg",
        "tech": "MOBILE APP",
        "title": "Safescape",
        "des": "Safescape is a powerful flutter app designed to provide women with a sense of security and empowerment, encompassing a range of essential features to enhancepersonal safety and well-being.  "
    }, {
        "imglink": "/cricbet.png",
        "tech": "WEB APP",
        "title": "Cricbet",
        "des": "Cricbet is a secure decentralized cricket betting platform built on the Tezos blockchain."
    },
    {
        "imglink": "/fundfusion.png",
        "tech": "WEB APP",
        "title": "Fund Fusion",
        "des": "FundFusion is a blockchain-based all-in-one funding platform that aims to provide accessible, secure, and efficient funding solutions for individuals, organizations, and causes."
    }
        ,
    {
        "imglink": "/docmedsync.png",
        "tech": "WEB APP",
        "title": "Docmedsync",
        "des": "Docmedsync is a decentralized solution for Electronic Medical Records sharing systems (EMR) based on Ethereum network and IPFS technology."
    },]
    return (
        <div className="bg-[#131417] flex flex-col p-4 justify-center items-center">

            <h1 className="text-center text-3xl font-extrabold font-mono text-white  p-4">PROJECTS</h1>
            <br />
            <div className="grid grid-cols-4 gap-4 p-8 ">
                {major.map((project, index) => (
                    <div className="p-8 bg-white bg-opacity-20 backdrop-blur-md  w-100 h-100 rounded-lg">
                        <div class="relative">
                            <img src={project.imglink} alt="Your Image" className="h-60 w-full rounded-lg object-cover" />
                            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 transform rounded-t-lg bg-inherit bg-opacity-20 backdrop-blur-md  p-4">
                                <p class="text-white font-semibold text-sm text-center">{project.tech}</p>
                            </div>

                        </div>

                        <br />
                        <p className="text-white text-xl text-center font-bold p-4">{project.title}</p>

                        <p className="text-white text-sm text-center overflow-hidden max-h-16">{project.des}</p>
                    </div>
                ))}

            </div>

        </div>
    );
}