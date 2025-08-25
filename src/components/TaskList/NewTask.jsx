import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] text-white rounded-xl bg-red-500'>
        <div className='flex items-center justify-between'>
          <h3 className='bg-blue-500 text-sm px-3 py-1 rounded-sm'>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h3 className='mt-5 text-2xl font-semibold'>{data.title}</h3>
        <p className='mt-1 text-sm'>{data.description}</p>
      <div className='mt-4'>
        <button className='bg-blue-500 py-1 px-2 rounded-sm text-sm cursor-pointer w-full'>Accept Task</button>
      </div>
      </div>
  )
}

export default NewTask;