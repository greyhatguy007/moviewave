import React from 'react'
import { useNavigate } from 'react-router'


const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='text-center pt-5'>
      <h1 className='text-8xl'>404</h1>
      <h2 className='text-4xl pt-5'>Lost ?</h2>
      <h3 className='text-5xl pt-5'>This is not the page you're looking for</h3>
      <button onClick={()=>{navigate(-1)}} className='pt-9 text-3xl text-blue-500'>Go Back</button>
    </div>
  )
}

export default NotFound
