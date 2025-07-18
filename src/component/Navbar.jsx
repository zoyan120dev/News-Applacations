import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import MobileMenu from './responsive/ToggleMenu';
import { navData } from './data/navData';
import DashBord from './DashBord';


function Navbar() {

    const [ismenu , setmenu] = useState(false);
    const toggleMenu = () => setmenu((prev) => !prev)

    useEffect (() => {
        const bodyClass = document.body.classList;
        ismenu ? bodyClass.add("no-Scroll") : bodyClass.remove("no-Scroll");
        return () => bodyClass.remove("no-Scroll")
    }, [setmenu])

  return (
    <>
        
    {/* navbar section added */}
       <section className=' bg-[#E4E4E780] p-4'>
         <nav className='max-w-[1300px] mx-auto '>
          <div className='flex justify-between p-5 items-center'>
            <div>
                <img src="/logo.png" alt=""  className='w-[131px] h-[36px]'/>
            </div>

            <ul className='flex gap-10'>
                {
                    navData.map((items, i) => (
                        <li key={i} className='lg:text-xl text-lg hidden lg:flex'><NavLink to={items.link} className='text-gray-400'>{items.navitem}</NavLink></li>
                    ))
                }
            </ul>
             

              <button className='lg:hidden block text-gray-200' onClick={toggleMenu}>
               <div className='space-y-1'>
                <span className='block w-6 h-0.5 bg-black'></span>
                <span className='block w-6 h-0.5 bg-black'></span>
                <span className='block w-6 h-0.5 bg-black'></span>
               </div>
            </button>


            <div className='space-x-[20px] lg:flex hidden'>
                 <div className='flex space-x-[10px]'>
                   <div className='w-[40px] h-[40px] bg-[#E4E4E7] flex justify-center items-center rounded-full'>
                     <img src="/bel.png" alt="bel"  className='w-[17px] h-[17px]'/>
                   </div>
                   <img src="/person.png" alt="" className='w-[40px] h-[40px]'/>
                 </div>
                <div >
                    <p className='lg:text-xl text-sm md:text-md text-gray-500'>Usman Zafar</p>
                    <p className='lg:text-lg text-gray-400 md:text-sm text-xs'>usmanzafar@gmail.com</p>
                </div>
            </div>
          </div>
          {ismenu && <MobileMenu  toggleMenu={toggleMenu}/>}
    </nav>

    <DashBord/>
       </section>
    </>
  )
}

export default Navbar