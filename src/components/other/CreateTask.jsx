import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setnewTask] = useState({});

  useEffect(() => {
  if (Object.keys(newTask).length === 0) return;

  const stored = localStorage.getItem('employees');
  if (!stored) return;

  const data = JSON.parse(stored);

  data.forEach((elem) => {
    if (newTask.assignTo === elem.firstname) {
      elem.tasks.push(newTask);
      console.log("Task pushed to employee:", elem);
    }
  });

  // Optional: save updated data back to localStorage
  localStorage.setItem('employees', JSON.stringify(data));
}, [newTask]);



  const submitHandler = (e)=>{
    e.preventDefault();

    setnewTask({taskTitle,taskDate,assignTo,category,taskDescription,active:false,new_task:true,failed:false,completed:false})

    setTaskTitle('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setTaskDescription('');


  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-wra w-full items-start justify-between">
          <div className="w-1/2"> 
            <div>
              <h3 className="text-base text-gray-300 mb-0.5">Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-300 border-[1px] mb-4" type="text" placeholder="Make a UI Design"></input>
            </div>

            <div>
              <h3  className="text-base text-gray-300 mb-0.5">Date</h3>
              <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4" type="date"></input>
            </div>
          
            <div>
              <h3 className="text-base text-gray-300 mb-0.5">Assign To</h3>
              <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4" type="text" placeholder="Employee Name"></input>
            </div>

            <div>
              <h3 className="text-base text-gray-300 mb-0.5">Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4" type="text" placeholder="design, dev, etc"></input>
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea 
            value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
            className="w-full h-50 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
            <button className="bg-emerald-500 py-2 hover:bg-emerald-600 rounded text-sm mt-4 w-full">Asign Task</button>
          </div>
        </form>                               
      </div>
  )
}

export default CreateTask;