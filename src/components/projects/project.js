import React from "react";
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter'
import SubmitForm from "./submitForm";
export default function Project() {
    const major = [{
        "imglink": "/safescape.jpeg",
        "repo": "https://github.com/architg-5501/Safescape",
        "tech": "MOBILE APP",
        "applink": "https://appetize.io/app/drlo5u6b5haii4nyfsbkk2xpxa?device=pixel7&osVersion=13.0",
        "title": "SAFESCAPE",
        "des": "Safescape is a powerful flutter app designed to provide women with a sense of security and empowerment, encompassing a range of essential features to enhancepersonal safety and well-being.  "
    }, {
        "imglink": "/cricbet.png",
        "repo": "https://github.com/architg-5501/Cricbet",
        "tech": "WEB APP",
        "title": "CRICBET",
        "applink": "https://cricbet-architg5501.vercel.app/",
        "des": "Cricbet is a secure decentralized cricket betting platform built on the Tezos blockchain."
    },
    {
        "imglink": "/fundfusion.png",
        "repo": "https://github.com/architg-5501/fundfusion",
        "tech": "WEB APP",
        "title": "FUND FUSION",
        "applink": "https://fundfusion.vercel.app/",
        "des": "FundFusion is a blockchain-based all-in-one funding platform that aims to provide accessible, secure, and efficient funding solutions for individuals, organizations, and causes."
    }
        ,
    {
        "imglink": "/docmedsync.png",
        "tech": "WEB APP",
        "title": "DOCMESYNC",
        "repo": "https://github.com/architg-5501/docmedsync",
        "applink": "https://docmedsync.vercel.app/",
        "des": "Docmedsync is a decentralized solution for Electronic Medical Records sharing systems (EMR) based on Ethereum network and IPFS technology."
    },]
    return (
        <div className="bg-[#131417] flex flex-col p-4 justify-center items-center">

            <h1 className="text-center text-3xl font-extrabold font-mono text-white  p-4">PROJECTS</h1>
            <br />
            <div className="grid grid-cols-4 gap-8 p-8  ">
                {major.map((project, index) => (
                    <Tilt>

                        <div className="p-8 bg-white bg-opacity-20 backdrop-blur-md shadow-lg shadow-cyan-500/50 w-100 h-100 rounded-lg  transform transition-transform ease-in ">
                            <div class="relative hover:cursor-pointer " onClick={() => { window.location.href = `${project.applink}` }}>


                                <img src={project.imglink} alt="Your Image" className="hover:opacity-70  h-60 w-full rounded-lg object-cover relative  transform transition-transform ease-in" />
                                <div class=" absolute bottom-0 left-1/2 -translate-x-1/2 transform rounded-t-lg bg-inherit bg-opacity-20 backdrop-blur-md  p-4">
                                    <p class="text-white font-semibold text-sm text-center">{project.tech}</p>
                                </div>


                            </div>

                            <br />

                            <p className="text-slate-200 text-xl text-center font-bold p-4 antialiased hover:subpixel-antialiased hover:cursor-pointer" onClick={() => { window.location.href = `${project.repo}` }}>{project.title}
                            </p>

                            <p className="text-blue-200 text-sm text-center overflow-hidden max-h-16">{project.des}</p>
                            <br />
                            <div className="flex flex-row justify-center">

                                <button onClick={() => { window.location.href = `${project.repo}` }} data-tip="Github" type="button" className="text-white tooltip  tooltip-bottom font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                </button>

                                <button onClick={() => { window.location.href = `${project.applink}` }} type="button" data-tip="Live" className="text-white tooltip tooltip-bottom font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg class=" w-4 h-4 me-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </Tilt>
                ))}

            </div>
            <SubmitForm />
        </div >
    );
}