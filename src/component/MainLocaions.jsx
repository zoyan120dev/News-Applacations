import React from 'react'
import DashBord6 from './DashBord6'

function MainLocaions() {
  return (
   <>
    <DashBord6/>
   <section className='max-w-[1300px] mx-auto mt-9'>
      {/* main sections div */}
      <div>
        {/* left section */}
           <div>

              <div className='flex items-center gap-2'>
                <div className='bg-[#F4F4F5] p-3 rounded-full '>
                    <img src="/map.png" alt="map-picture" />
                </div>
                <div>
                    <span className='text-gray-500 text-sm'>Location</span>
                    <h1 className='font-bold text-xl md:text-2xl'>Tulare County,  Los Angles, CA 23415</h1>
                </div>
              </div>

                <div className='flex items-center gap-2 mt-4'>
                <div className='bg-[#F4F4F5] p-3 rounded-full'>
                    <img src="/icone.png" alt="map-picture" />
                </div>
                <div className='border-b border-gray-600 pb-5 w-full'>
                    <span className='text-gray-500 text-sm'>Approx. Cost:</span>
                    <h1 className='font-bold text-xl md:text-2xl'>$60,607,456.00</h1>
                </div>
              </div>
                
                <div className='border-b border-gray-600 pb-5 w-full my-4'>
                    <h1 className='text-base md:text-2xl font-bold'>Description</h1>
                     <p className='text-base md:text-lg text-gray-500 leading-tight'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                </div>

           </div>
        {/* Right section */}
      </div>
   </section>
   </>
  )
}

export default MainLocaions