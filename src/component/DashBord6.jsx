import React from 'react'
function DashBord6() {
  return (
    <section className='bg-[#E4E4E780] p-6'>
      <div className='max-w-[1300px] mx-auto pt-0 pl-5 '>
        <span className='text-gray-400 text-sm'>Incidents - DR-4699 March 2023 Severe Storms </span>
        <div className='flex md:justify-between justify-center flex-col lg:flex-row'>
            <h1 className='text-[35px] font-bold text-center flex gap-2 items-center'> <div><img src="/fi_15330449 (2).png" alt="" /></div>DR-4699 March 2023 Severe Storms</h1>

            <div className='flex gap-5 items-center flex-col sm:flex-row'>
               <span className='bg-[#FAFAFA] p-3 rounded-xl 'shadow-md><i class="fa-solid fa-magnifying-glass"></i> <input   className='text-black'  placeholder='Search incident' type="search"/></span>
               <button className='btn bg-[#E4E4E7] p-3 rounded-xl text-gray-500 text-lg hover:bg-gray-400 transition-all '>Sort By: Date modified</button>
               <button className='btn p-3 rounded-xl bg-[#F26922] text-white text-lg hover:bg-red-300 transition-all font-bold '> Finished</button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default DashBord6;