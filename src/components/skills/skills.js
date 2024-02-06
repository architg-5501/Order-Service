import React from "react";
import tech from "../../data/tech";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
export default function Skills() {
    const controls = useAnimation();


    useEffect(() => {
        const loopAnimation = async () => {
            while (true) {
                await controls.start({ y: -5, x: 5 });
                await controls.start({ y: 10, x: -10 });
            }
        };

        loopAnimation();
    }, [controls]);
    return (
        <div className="bg-[#131417] flex flex-col p-4 justify-center items-center">

            <h1 className="text-center text-3xl font-extrabold font-mono text-white  p-4">SKILLS</h1>
            <br />

            <div className="grid grid-cols-4 gap-16 p-4">
                {tech.map((skill, id) => {
                    return (
                        <div key={id} className="p-2  transform transition-transform ease-in  hover:scale-110" >
                            <motion.div
                                key={id}
                                className="glass-item"
                                animate={controls}
                                transition={{ duration: 1 }}
                            >
                                <div class="rounded-full shadow-md shadow-cyan-500/50 bg-white bg-opacity-20 backdrop-blur-md  w-20 h-20 p-4 flex items-center justify-center ">
                                    <img src={skill.imageSrc} alt={skill.title} />
                                </div>
                                <h3 className="text-white text-center font-semibold mt-2">{skill.title}</h3>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}