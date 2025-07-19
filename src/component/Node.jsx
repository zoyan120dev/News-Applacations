import React from 'react'
import DashBord4 from './DashBord4';

function Node() {
  return (
    <section>
        <DashBord4/>
        <div className='md:max-w-[752px] md:mx-auto  md:mt-20 max-w-[400px] mx-auto overflow-x-hidden mt-4'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl py-3'>Let’s give the incident a title?</h1>
              <span className='text-gray-500 text-base md:text-lg pb-6'>Make a title that will easily identify the incidents</span>
               <input type="text" placeholder='Add title here' className='bg-[#F4F4F5] p-3 rounded-lg'/>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl py-3'>Describe what happened during the incident?</h1>
                <span className='text-gray-500 text-base md:text-lg pb-6'>Share some information about the incident. The when, where, how. </span>
                <textarea cols="30" rows="7" className='bg-[#F4F4F5] rounded-lg p-3' placeholder='Type here'></textarea>
            </div>
        </div>
    </section>
  )
}

export default Node;