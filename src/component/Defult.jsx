import React from 'react'
import { DesultData } from './data/DesultGrid'

function Defult() {
  return (
    <>
    
    <div className='mt-4'>
                  <div className='flex justify-between'>
                     <span className='font-bold text-lg'>Locations</span>
                    <a href='#' className='text-gray-400 text-base'>See all</a>
               </div>
              <div className='border-b-2 border-gray-600 py-10'>
               {
                DesultData.map((items , i) => (
                      <div className='flex gap-x-4 space-y-4 items-center mt-4 bg-[#F4F4F5] pr-2 rounded-xl '>
                         <div>
                            <img src={items.img} alt="Loding" />
                         </div>
                         <div>
                            <h1 className='font-bold text-lg '>{items.title}</h1>
                            <p className='text-gray-500 text-lg'>{items.dis}</p>
                            <h1 className='font-bold text-xl'>{items.price}</h1>
                         </div>
                      </div>
                ))
               }
              </div>
        </div>
    </>
  )
}

export default Defult