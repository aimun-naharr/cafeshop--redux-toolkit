import React from "react";
import cookies from "./../assets/cafe1 (3).jpg";

const BreakfastSection = () => {
        return (
                <section className="max-w-5xl mx-auto flex items-center justify-start gap-8 mt-[-150px] mb-28">
                        <img src={cookies} alt="" className="h-80 aspect-square " />
                        <div className="">
                                <h1 className="text-5xl">Free cookies</h1>
                                <p>Every third visit and you will get free cookies</p>
                        </div>
                </section>
        );
};

export default BreakfastSection;
