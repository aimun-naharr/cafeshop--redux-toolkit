import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = () => {
     return (
           <aside className='col-span-2 bg-white/50 text-yellow-700 font-medium h-screen p-5 rounded'>
      <ul className='flex gap-3  flex-col h-full'>
        <li className='border-b-2 text-center border-b-yellow-500/50'>Admin Dashboard</li>
        <li>
          <Link to='/dashboard'>Product List</Link>
        </li>
        <li>
          <Link to='add-product'> Add Product </Link>
        </li>
        <li className='mt-auto'>
          <Link to='/'> Back to Home </Link>
        </li>
      </ul>
    </aside>
     );
};

export default Sidebar;