import React from 'react'
import { useNavigate } from 'react-router'

function ErrorPage() {
    let HandelEffct = useNavigate();
    const HandelError = () =>{
        HandelEffct("/")
    }
  return (
     <>
       <div className='text-center mt-14'>
        <h1 className='md:text-[150px] text-[50px] text-red-500 font-bold'>404</h1>
        <h1 className='text-3xl md:text-6xl text-red-900'>This Page is Not Avalible</h1>
        <button className='mt-7 bg-blue-800 px-10 py-3 rounded-xl text-white' onClick={HandelError}>Please Back</button>
       </div>
      
     </>
  )
}

export default ErrorPage