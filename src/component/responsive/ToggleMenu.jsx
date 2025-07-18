import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from '../data/navData';

function MobileMenu({ toggleMenu }) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-[50%] h-screen bg-gray-100 z-50 overflow-y-hidden'>
      <div className='flex justify-between items-center pb-3 px-4'>
        <button className='text-black text-2xl' aria-label="Close menu" onClick={toggleMenu}>
          &times;
        </button>
      </div>
      <ul className='space-y-4 px-4'>
        {
          navData.map((items, i) => (
            <li key={i} className='block text-lg'>
              <NavLink to={items.navitem} className='text-gray-400'>
                {items.navitem}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default MobileMenu