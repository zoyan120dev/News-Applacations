import React from 'react'
import { GetData } from './data/GetData'
import { useLocation, Navigate, replace, useNavigate } from 'react-router-dom';
import Incidents from './Incidents';
function Started() {
   let useNaviget = useNavigate();

   const Navagationuse = () =>{
     useNaviget("/select")
   }
    
  return (
     <>
      <section className='max-w-[1300px] mx-auto mt-[110px]'>
        <div className='text-center'>
            <div className='py-5'>
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-2'>Let’s get started</h1>
            <p className='lg:max-w-[580px]  md:max-w-[500px] sm:max-w-[450px] max-w-[400px] mx-auto text-base lg:text-lg text-gray-500 py-2'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
            <div>
                {/*  */}
            </div>
        </div>
           
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:max-w-[820px] md:mx-auto m-10'>
           {
            GetData.map((items, i) => (
                 <div key={i} className='bg-[#F4F4F5] p-3 rounded-lg hover:bg-slate-300 transition-all trasnlate-y-[20p md:max-w-[235px] md:h-[300px] '>
                     <div>
                        <img src={items.img} alt="hi" />
                     </div>
                    <div className='md:mt-[70px]'>
                         <h1 className='font-bold text-lg md:text-xl'>{items.title}</h1>
                     <p className='text-gray-200 text-md md:text-lg'>{items.dicrition}</p>
                    </div>
                 </div>
            ))
           }
        </div>
             
             <button className='bg-[#F26922] px-10 py-4 rounded-xl text-white font-bold' onClick={Navagationuse}>Get started</button>
        </div>
      </section>
     </>
  )
}

export default Started;