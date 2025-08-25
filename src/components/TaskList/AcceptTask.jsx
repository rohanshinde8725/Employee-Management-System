import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] text-white rounded-xl bg-teal-400">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-500 text-sm px-3 py-1 rounded-sm">{data.category}</h3>
        <h4>{data.date}</h4>
      </div>
      <h3 className="mt-5 text-2xl font-semibold">{data.title}</h3>
      <p className="mt-1 text-sm">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-sm cursor-pointer">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-sm cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
