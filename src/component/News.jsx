import React, { useState } from 'react'
import { NewsData } from './data/NewsData'

function News() {

  const [showChat, setShowChat] = useState(false);
  const handleToggleChat = () => {
    setShowChat(!showChat);
  }
  return (
   <>
   
    {/*  */}
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

    <div className='absolute md:right-[50px]  right-[250px] lg:bottom-[80px]  bottom-[-90px] cursor-pointer md:mt-0 ' onClick={handleToggleChat}>
             <img src="/cimg.png" alt="functtion"/>
          </div>
   </section>
   </>
  )
}

export default News