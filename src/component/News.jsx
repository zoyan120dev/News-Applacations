import React, { useState } from 'react'
import { NewsData } from './data/NewsData'
import DashBord from './DashBord';

function News() {

  const [showChat, setShowChat] = useState(false);
  const handleToggleChat = () => {
    setShowChat(!showChat);
  }
  return (
   <>
   
    {/*  */}
    <DashBord/>
   <section className='relative mt-14 '>
     <div className='max-w-[1300px] mx-auto '>
          {/* Grids sections */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[20px] gap-x-[20px] justify-center items-center m-[50px] md:m-[20px]  sm:m-[30px] lg:m-[16px] xl:m--0'>
            {/* Grids Card */}
               {
                 NewsData.map((items , i) => (
                    <div key={i}>
                        {/* imges */}
                        <div className='transition-all hover:scale-105'>
                            <img src={items.img} alt="" className='w-full h-auto'/>
                        </div>
                        <h3 className='font-semibold text-lg md:text-xl py-2'>{items.title}</h3>
                        <p className='text-md  text-gray-400 font-midium'>{items.discription}</p>
                        <h2 className='font-bold text-lg md:text-2xl'>{items.Blance}</h2>
                    </div>
                 ))
               }
          </div>
    </div>

    <div className='absolute md:right-[50px]  right-[250px] lg:bottom-[80px]  bottom-[-90px] cursor-pointer md:mt-0 p-5' onClick={handleToggleChat}>
             <img src="/cimg.png" alt="functtion"/>
          </div>

          {showChat && (
            <div className='absolute md:right-[50px]  right-[100px] lg:bottom-[200px] bg-white bottom-[90px] cursor-pointer md:mt-0 p-5 shadow-lg rounded-xl z-50'>
                <div className='bg-[#f97316] text-white font-bold rounded-t-xl py-5 px-5 text-[30px] '>
                    Chat with Cypher
                </div>
                <div className='p-3 relative'>
                   <div className='max-w-[301px] max-h-[370px] relative'>
                       <p className='bg-slate-700 p-4 rounded-xl absolute top-0 right-0 text-white'>Lorem ipsum dolor sit.</p>
                       <p className='bg-gray-100 shadow-md p-4 rounded-xl absolute top-[80px] left-0 text-black'>Lorem ipsum dolor sit.</p>
                        <p className='bg-slate-700 p-4 rounded-xl absolute top-40 right-0 text-white'>Lorem ipsum dolor sit.</p>

                         <p className='bg-gray-100 shadow-md p-4 rounded-xl absolute  left-0 top-56 text-black'>Lorem ipsum dolor sit.</p>
                   </div>
                </div>

                <div className='mt-[280px]'>
                  <input type="text" placeholder='Enter your question...' className='w-full border p-2'/>
                  <div className='flex justify-between mt-3 items-center'>
                    <div className='flex gap-2 '>
                     <div>
                       <img src="/Frame (6).png" alt="" />
                     </div>
                     <div >
                       <img src="/Frame (9).png" alt="" />
                     </div>
                      <div>
                       <img src="/Frame (7).png" alt="" />
                     </div>
                    </div>
                    <button className='btn bg-[#F26922] px-4 py-1 rounded-xl text-white'>Send</button>
                  </div>
                </div>
            </div>
          )}
   </section>
   </>
  )
}

export default News