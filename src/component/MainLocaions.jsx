import React from 'react'
import DashBord6 from './DashBord6'
import { GridsData } from './data/GridData'
import Defult from './Defult'

function MainLocaions() {
  return (
   <>
    <DashBord6/>
   <section className='max-w-[1300px] mx-auto mt-9 pb-[100px]'>
      {/* main sections div */}
      <div className='flex justify-between gap-5 flex-col m-3 md:flex-row'>
        {/* left section */}
           <div className='md:max-w-[680px] justify-center max-w-[500px] mx-auto sm:ml-24  md:ml-0'>

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
                {/* Grid card (1) */}

                <div className='mt-3'>
                    <div className='flex justify-between'>
                        <span className='font-bold text-lg'>Locations</span>
                        <span className='text-gray-400 text-base'>See all</span>
                    </div>
                    {/* grid Card */}

                    <div className='grid grid-cols-2  lg:grid-cols-3 gap-x-2 gap-y-3 border-b border-gray-600 justify-center mx-auto'>
                       {
                        GridsData.map((items, i) => (
                            <div key={i} >
                               <div className='mt-3'>
                                <img src={items.img} alt="Loding"/>
                               </div>
                               <h1 className='font-bold text-lg'>{items.title}</h1>
                               <p className='text-base text-gray-400'>{items.disciptions}</p>
                               <span className='font-bold text-lg'>{items.price}</span>
                            </div>
                        ))
                       }
                    </div>
                </div>
               
               {/*  Defult Grid*/}
               <Defult/>
               <Defult/>
           </div>
        {/* Right section */}
        <div>
            <p className='text-gray-400 text-base'>Incident Map</p>
            <img src="/map(2).png" alt="" className='w-full h-auto'/>
            <p className='text-gray-400 text-base'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
        </div>
      </div>
   </section>
   </>
  )
}

export default MainLocaions