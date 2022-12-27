import React from 'react';
import { motion } from "framer-motion";

const ItemCard = ({item}) => {
     const {name, category, image, price, description}=item
     return (
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
           }} className="flex flex-col gap-2 w-[200px]"> 
               <img src={image} alt="" />
               <div className='flex w-full items-center justify-between'>
                    <span>{name}</span>
                    <span className='text-3xl text-yellow-800 '>${price}</span>
               </div>
               <div className='text-left text-sm flex flex-col'><span className='text-yellow-900 font-sans'>{description}</span>
               <span className='text-xs'>Category: {category}</span></div>
               <div>
                    <button className='w-full bg-yellow-900 text-white rounded-lg py-2'>Add to Cart</button>
               </div>
          </motion.div>
     );
};

export default ItemCard;