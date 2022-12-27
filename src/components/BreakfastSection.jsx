import React from "react";
import cookies from "./../assets/cafe1 (3).jpg";
import { motion } from "framer-motion";
const BreakfastSection = () => {
        return (
                <motion.section className="breakfast-section relative max-w-5xl mx-auto flex items-center justify-start gap-8  mb-28 before:content-['Enjoy your day'] ">
                        <motion.img
                                initial={{
                                        opacity: 0,
                                        x: -100,
                                }}
                                whileInView={{
                                        x: 0,
                                        opacity: 1,
                                }}
                                transition={{
                                        duration: 0.5,
                                        
                                }}
                                src={cookies}
                                alt=""
                                className="h-80 aspect-square "
                        />
                        <div className="">
                                <h1 className="text-5xl hover:animate-bounce">Free cookies</h1>
                                <p>Every third visit and you will get free cookies</p>
                        </div>
                </motion.section>
        );
};

export default BreakfastSection;
