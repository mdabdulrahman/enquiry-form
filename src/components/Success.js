import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate=useNavigate()
  return (
    <div>
        <div className=' mx-auto  w-full text-center my-20'>
<h1 className='flex justify-center items-center gap-5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-green-500 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

    Your enquiry form is successfully submited</h1>
<button onClick={()=>navigate("/")} className='bg-sky-500 mx-auto flex justify-center text-white px-3 py-2 my-6 rounded'>Go back</button>
        </div>
    </div>
  )
}

export default Success