import React from "react";
import pancake from "../assets/pancake.jpg";
import coffee from "../assets/coffee.jpg";
import coffee2 from "../assets/coffee2.jpg";

const Blogs = () => {
        return (
                <section className=" max-w-6xl mx-auto  h-screen">
                        <p>Our blogs</p>
                        <h1 className="text-5xl font-medium text-yellow-900 mb-28">Recent posts</h1>
                        <div className="relativeh-fit grid grid-cols-1 justify-center items-center">
                                <img src={pancake} alt="pancake" className="absolute md:w-[500px] rotate-180 opacity-75" />
                                <div>
                                        <div className="flex justify-center z-50 relative gap-8 flex-col items-end ">
                                                <div className="flex w-fit gap-4">
                                                        <div>
                                                                <img src={coffee} alt="" className="h-56 aspect-square" />
                                                        </div>
                                                        <div className="py-2 ">
                                                                <h1 className="text-2xl text-yellow-800 font-medium">Secret of delicious coffee</h1>
                                                                <p>
                                                                        Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Voluptates, libero?
                                                                </p>
                                                                <button className="text-yellow-900">Read more</button>
                                                        </div>
                                                </div>
                                                <div className="flex w-fit gap-4">
                                                        <div>
                                                                <img src={coffee2} alt="" className="h-56 aspect-square" />
                                                        </div>
                                                        <div className="py-2">
                                                                <h1 className="text-2xl text-yellow-800 font-medium">Secret of delicious coffee</h1>
                                                                <p>
                                                                        Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit. Voluptates, libero?
                                                                </p>
                                                                <button className="text-yellow-900">Read more</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default Blogs;
