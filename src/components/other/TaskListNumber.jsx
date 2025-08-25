const TaskListNumber = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10'>
      <div className='py-6 px-9 bg-red-400 w-[40%] rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{data.taskCounts.new_task}</h2>
        <h3 className='text-white text-xl font-medium'>New Task</h3>
      </div>

      <div className='py-6 px-9 bg-blue-400 w-[40%] rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-white text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='py-6 px-9 bg-green-400 w-[40%] rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-white text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='py-6 px-9 bg-yellow-400 w-[40%] rounded-lg'>
        <h2 className='text-white text-2xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-white text-xl font-medium'>Failed Task</h3>
      </div>
      
    </div>
  )
}

export default TaskListNumber;