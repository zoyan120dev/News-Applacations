import React from 'react'

function DashBord() {
  return (
    <div className='max-w-[1300px] mx-auto pt-0 pl-5'>
        <span className='text-gray-400 text-sm'>Welcome back</span>
        <div className='flex md:justify-between justify-center flex-col md:flex-row'>
            <h1 className='text-[35px] font-bold text-center'>Dashboard</h1>

            <div className='flex gap-5 items-center flex-col sm:flex-row'>
               <span className='bg-[#FAFAFA] p-3 rounded-xl 'shadow-md><i class="fa-solid fa-magnifying-glass"></i> <input type="search"/></span>
               <button className='btn bg-[#E4E4E7] p-3 rounded-xl text-gray-500 text-lg hover:bg-gray-400 transition-all '>Sort By: Date modified</button>
               <button className='btn p-3 rounded-xl bg-[#F26922] text-white text-lg hover:bg-red-300 transition-all'>Cypher AI</button>
            </div>
        </div>
    </div>
  )
}

export default DashBord;