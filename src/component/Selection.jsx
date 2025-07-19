import React, { useState } from 'react'
import DashBord3 from './DashBord3';
import { SectionData } from './data/Adata';

function Selection() {

  const [activeIndex , setActiveIndex] = useState(10);

  {

  }
  return (
    <>
     <section>
         <DashBord3/>
        <h1 className='text-center mt-12 text-2xl font-bold md:text-4xl'> Which of these best describes the incident?</h1>
         <div className='md:max-w-[753px] md:mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 m-5 gap-3 '>
              {
                 SectionData.map((items, i) => (
                  <div key={i} className=' flex  mt-7 items-center '>
                   <div onClick={() => setActiveIndex(i)} className={`flex cursor-pointer bg-[#F4F4F5]  px-8 py-5 min-w-[180px] h-[69px] gap-2 rounded-xl shadow-sm border border-gray-400 ${activeIndex === i ? "bg-orange-500 text-white" : "bg-[#F4F4F5] text-black "}`}>
                    <div>
                     <img src={items.img} alt="Loding" />
                   </div>
                    <span className=''>{items.name}</span>
                   </div>
                  </div>
                 ))
              }
         </div>
     </section>
    </>
  )
}

export default Selection;