import React, { useState, useEffect, useRef } from 'react'
import SocialButton from './SocialButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from "react-type-animation"
// import NET from 'vanta/dist/vanta.net.min'


import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Skills from '../skills/skills'
import Project from '../projects/project'

function Model(props) {
    const { scene } = useGLTF("/avatar.glb");
    return <primitive object={scene} {...props} />
}



const highlights = [
    "Blockchain Developer",
    3000,
    "Fullstack Developer",
    3000,
    "Web Developer",
    3000,
]


const socials = [

    {
        url: "https://www.linkedin.com/in/archit-gupta-080aa1249/",
        icon: <FontAwesomeIcon class="rounded-xl w-12 p-2.5 hover:text-[#0077b5] transition ease-in-out duration-500" icon={faLinkedin} />,

    },
    {
        url: "https://leetcode.com/archit01/",
        icon: <FontAwesomeIcon class="w-12 p-2 hover:text-[#5865F2] transition ease-in-out duration-500" icon={faCode} />,
    },
    {
        url: "https://github.com/architg-5501",
        icon: <FontAwesomeIcon class="w-12 p-2 hover:text-[#333] transition ease-in-out duration-500" icon={faGithub} />,

    },
    {
        url: "https://discord.com/channels/archit0304",
        icon: <FontAwesomeIcon class="w-12 p-2 hover:text-[#5865F2] transition ease-in-out duration-500" icon={faDiscord} />,
    },




]

export default function Hero() {


    return (
        <div>
            <section class="" id="home">
                <div className="h-full w-full flex flex-col bg-cover md:flex-row-reverse md:h-screen transition-all duration-500 ease-in-out md:p-10 text-black dark:bg-[#131417] bg-white dark:text-white">

                    <div
                        className="relative h-screen w-full flex flex-col items-center justify-center space-y-10 md:h-full"
                        data-aos="zoom-in-left"
                    >
                        <div className="relative h-[50%] w-2/3 transition duration-500 ease-in-out hover:scale-105 md:h-[55%]">
                            {/* <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ "position": "absolute" }}>

                                <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                                    <Stage >
                                        <Model scale={2} />
                                    </Stage>
                                </PresentationControls>
                            </Canvas>*/}
                            <Canvas
                                camera={{ position: [2, 0, 12.25], fov: 15 }}

                            >
                                <ambientLight intensity={1.25} />
                                <ambientLight intensity={0.1} />
                                <directionalLight intensity={0.6} />
                                <Suspense fallback={null}>
                                    <Model scale={1.5} position={[0.025, -2, 0]} />
                                </Suspense>
                                <OrbitControls />
                            </Canvas>


                        </div>
                        <div className="flex flex-col items-center space-y-5">
                            <p className="text-2xl font-bold">Archit Gupta</p>
                            <p className="">Jan 23th, 2002</p>
                            <p className="text-gray-600">@archit.dev</p>
                            <div className="h-10 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600  font-medium">
                                <TypeAnimation
                                    cursor={false}
                                    sequence={highlights}
                                    speed={40}

                                    wrapper="p"
                                    repeat={Infinity}
                                />
                            </div>
                        </div>
                    </div>


                    <div
                        className=" h-full w-full flex flex-col items-center justify-center space-y-14 px-10 pb-10 md:pl-20"

                    >
                        <div className="space-y-10  backdrop-filter backdrop-blur-lg" >
                            <div className="space-y-5">
                                <div className="animate-bounce flex mb-5 text-3xl md:text-5xl">
                                    <p className="font-bold">Hi there</p>
                                    <p className="font-bold text-purple-600 ">!</p>
                                </div>
                                <div className="flex md:space-x-5" data-aos="fade-up">
                                    <span className="h-0.5 w-10 mt-3 bg-black dark:bg-white hidden md:block"></span>
                                    <p className="w-full md:text-xl">

                                        I'm an enthusiastic web developer based in India. I characterize myself as someone deeply passionate about coding, constantly embracing new technologies and committed to continuous learning.
                                    </p>
                                </div>
                                <div className="flex md:space-x-5" data-aos="fade-up">
                                    <span className="w-10 hidden md:block"></span>
                                    <p className="w-full md:text-xl">
                                        During my free time, I frequently engage in activities such as listening to music, playing games, or acquiring knowledge in new technologies.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full md:text-lg flex flex-col items-center"
                                data-aos="fade-up"
                            >
                                <div className="flex  md:space-x-2 flex-wrap md:text-xl ">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Learning is more effective </p>
                                </div>
                                <div className="flex md:space-x-2 flex-wrap md:text-xl ">
                                    <p>when you embrace the fact that you might be the obstacle.</p>
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center space-x-6 md:space-x-20">
                            {socials.map((social, i) => (
                                <SocialButton social={social} key={i} />
                            ))}
                        </div>
                    </div>

                </div>


            </section >
            <Skills />
            <Project />
        </div >
    )
}
