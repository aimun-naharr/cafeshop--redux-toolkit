import React from "react";
import pancake from "../assets/pancake.jpg";
import coffee from "../assets/coffee.jpg";
import coffee2 from "../assets/coffee2.jpg";
import { motion } from "framer-motion"
const Blogs = () => {
       
        return (
                <section className=" max-w-6xl mx-auto  h-screen mb-12">
                        <p>Our blogs</p>
                        <h1 className="text-5xl font-medium text-yellow-900 mb-28">Recent posts</h1>
                        <div className="relativeh-fit grid grid-cols-1 justify-center items-center">
                                <img src={pancake} alt="pancake" className="absolute md:w-[500px] rotate-180  " />
                                <div>
                                        <div className="flex justify-center z-50 relative gap-8 flex-col items-end ">
                                                <div className="flex w-fit gap-4">
                                                        <div className="relative">
                                                                <img src={coffee} alt="" className="h-56 aspect-square " />
                                                                <span className="absolute top-0 right-0 bg-yellow-900 text-white py-2 px-4">02 February 2022</span>
                                                        </div>
                                                        <div className="py-2 ">
                                                                <h1 className="text-2xl text-yellow-800 font-medium">Secret of delicious coffee</h1>
                                                                <p>
                                                                        Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Voluptates, libero?
                                                                </p>
                                                                <button className="text-yellow-900">Read more</button>
                                                        </div>
                                                </div>
                                                <motion.div initial={{
                                                                opacity: 0,
                                                                y: 100,
                                                        }}
                                                        whileInView={{
                                                                y: 0,
                                                                opacity:1
                                                            }}
                                                            transition={{
                                                                duration:.5
                                                            }} className="flex w-fit gap-4">
                                                        <div 
                                                         className=" relative">
                                                                <img src={coffee2} alt="" className="h-56 aspect-square" />
                                                                <span className="absolute top-0 right-0 bg-yellow-900 text-white py-2 px-4">02 February 2022</span>
                                                        </div>
                                                        <div className="py-2">
                                                                <h1 className="text-2xl text-yellow-800 font-medium">Secret of delicious coffee</h1>
                                                                <p>
                                                                        Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Voluptates, libero?
                                                                </p>
                                                                <button className="text-yellow-900">Read more</button>
                                                        </div>
                                                </motion.div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default Blogs;
