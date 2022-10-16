import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate=useNavigate()
  return (
    <div>
        <div className='w-5/6 mx-auto  lg:w-full text-center my-20'>
<h1 className='lg:flex justify-center items-center lg:gap-5 '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 mx-auto lg:mx-0 text-green-500 h-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

    Your enquiry form is successfully submited</h1>
<button onClick={()=>navigate("/")} className='bg-sky-500 mx-auto flex justify-center text-white px-3 py-2 my-6 rounded'>Go back</button>
        </div>
    </div>
  )
}

export default Success