import React from 'react'
import { useNavigate } from 'react-router';
import Started from './started';
function DashBord2() {
    let navigate = useNavigate();
    
    const GoToIncidents = () => (
      navigate("/started")
    )
  return (
    <section className='bg-[#E4E4E780] p-5'>
      <div className='max-w-[1300px] mx-auto pt-0 pl-5 '>
        <span className='text-gray-400 text-sm'>Home - Incidents</span>
        <div className='flex md:justify-between justify-center flex-col lg:flex-row'>
            <h1 className='text-[35px] font-bold text-center'>Incidents</h1>

            <div className='flex gap-5 items-center flex-col sm:flex-row'>
               <span className='bg-[#FAFAFA] p-3 rounded-xl 'shadow-md><i class="fa-solid fa-magnifying-glass"></i> <input   className='text-black'  placeholder='Search incident' type="search"/></span>
               <button className='btn bg-[#E4E4E7] p-3 rounded-xl text-gray-500 text-lg hover:bg-gray-400 transition-all '>Sort By: Date modified</button>
               <button className='btn p-3 rounded-xl bg-[#F26922] text-white text-lg hover:bg-red-300 transition-all font-bold' onClick={ GoToIncidents}> +  New Incident</button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default DashBord2;