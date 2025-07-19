import React from 'react'
import DashBord5 from './DashBord5';

function LastSections() {
  return (
    <>
     <section>
        <DashBord5/>
        <div className='max-w-[752px] mx-auto  m-24'>
            <h1 className='font-bold text-xl md:text-3xl py-3'>Where’s the incident?</h1>
            <p className='text-gray-500 text-base md:text-lg leading-4 max-w-[500px] py-4'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
            <div>
                <img src="/Locatio.png" alt="" className='w-full h-auto'/>
            </div>
        </div>
     </section>
    </>
  )
}

export default LastSections;