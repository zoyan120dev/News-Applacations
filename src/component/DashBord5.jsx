import React from 'react'
import { useNavigate } from 'react-router-dom'

function DashBord5() {
    let navigate = useNavigate();
       
       const BackHome = () => (
         navigate("/node")
       )


       const NextSection = () => (
         navigate("/")
       )
  return (
   <>
   
    <section className='bg-[#E4E4E780] p-5'>
        {/* title */}
       <div className='flex justify-between items-center max-w-[1300px] mx-auto pt-0 pl-5 flex-col gap-y-4 lg:flex-row'>
           <div className='flex gap-2 items-center '>
           <div className='bg-[#E4E4E7] p-3 rounded-full  shadow-md'>
             <img src="/Frame (17).png" alt="plus sections"/>
           </div>
            <div>
                <span className='text-sm md:text-lg text-gray-500'>Home - Incidents - New Incident</span>
                <h1 className='font-bold text-2xl md:text-3xl'>New Incident</h1>
            </div>
        </div>
        <div className='hidden  md:flex'>
            <img src="/Rectangle 42014.png" alt="" />
            <img src="/Rectangle 42013 (1).png" alt="ladi.png" />
        </div>
        <div className='flex gap-4 flex-col lg:flex-row'>
            <button className='bg-[#FAFAFA] lg:px-10 xl:py-3 px-5 py-2 shadow-lg rounded-xl transition-all hover:bg-[#D4D4D8] ' onClick={BackHome}>Back</button>
            <button className='bg-[#F26922]  text-white lg:px-10 xl:py-3 px-5 py-2 shadow-lg  rounded-xl transition-all hover:bg-orange-500' onClick={NextSection }>Finished</button>
        </div>

       </div>
    </section>
   </>
  )
}

export default DashBord5;