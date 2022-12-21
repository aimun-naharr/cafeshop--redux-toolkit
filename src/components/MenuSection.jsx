import React from 'react';

const MenuSection = () => {
     return (
          <section className='max-w-5xl mx-auto mt-28'>
              <div className='flex flex-col items-center text-center'>
              <p>Our menu</p>
               <h1 className='text-5xl text-yellow-900 font-medium'>Special Menu</h1>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, asperiores! Dolores voluptates molestias ex minus atque similique consectetur blanditiis aspernatur?</p>
               <nav className='flex gap-4 mt-8'>
                    <span className='text-2xl font-bold text-yellow-700 cursor-pointer'>Beverages</span>
                    <span className='text-2xl font-bold text-yellow-700 cursor-pointer'>Starter</span>
                    <span className='text-2xl font-bold text-yellow-700 cursor-pointer'>Breakfasts</span>
                    <span className='text-2xl font-bold text-yellow-700 cursor-pointer'>Desserts</span>
               </nav>
               
              </div>
          </section>
     );
};

export default MenuSection;