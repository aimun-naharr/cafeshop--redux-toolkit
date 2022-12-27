import React, { useState } from "react";
import donut from "../assets/donut.jpg";
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react";

const Banner = () => {
        const [isVisible, setIsVisible] = useState(false)
        const handleScroll = () => {
                if (window.scrollY > 50) {
                  setIsVisible(true)
                } else {
                  setIsVisible(false)
                }
              }
              useEffect(() => {
                window.addEventListener("scroll", handleScroll)
                return () => {
                  window.removeEventListener("scroll", handleScroll)
                }
              }, [])
        return (
                <>
           <motion.section

                className={` backdrop-blur-md bg-white/30 backdrop-brightness-125   flex items-center mb-4 justify-center transition duration-150 ease-out ${isVisible && 'opacity-0'} `}>
                        {/* section wrapper */}
                        <div className="grid grid-cols-12  gap-12 max-w-[1600px]">
                                {/* left side */}
                                <div className="col-span-5 ml-[100px] py-8">
                                        <h4 className="text-xl text-yellow-900">Breakfast</h4>
                                        <h1 className="text-7xl font-medium text-yellow-900">Welcome to CafeNine</h1>
                                        {/* left bottom part */}
                                        <div className="ml-8">
                                                <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident facilis facere quis, dolor consectetur maxime voluptatibus, laborum
                                                        mollitia, sed consequuntur minus nihil eligendi vitae quasi 
                                                </p>
                                                <button className=" bg-yellow-900 text-white py-4 px-8 mt-4 transition-all hover:-translate-y-1 hover:scale-110">Reservation</button>
                                        </div>
                                </div>
                                {/* right side */}
                                <div  className="col-span-7 w-full h-fit">
                                        <img className="object-cover w-full max-h-screen" src={donut} alt="" />
                                </div>
                        </div>
                </motion.section>
                </>
        );
};

export default Banner;
