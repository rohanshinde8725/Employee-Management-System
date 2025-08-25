import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] text-white rounded-xl bg-blue-600'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-500 text-sm px-3 py-1 rounded-sm'>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>{data.title}</h3>
        <p className='mt-1 text-sm'>{data.description}</p>
        <div className='mt-4'>
            <button className='w-full bg-green-500 rounded-sm py-1 px-2 text-sm cursor-pointer'>Completed</button>    
        </div>  
    </div>
  )
}

export default CompleteTask