import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex gap-3 mt-8">
      <div className="w-[45%] bg-red-600 rounded-lg px-4  py-3">
        <h1 className="font-semibold text-2xl ">{data.taskCount.newTask}</h1>
        <h1 className="font-semibold text-2xl ">New Task</h1>
      </div>
      <div className="w-[45%] bg-blue-400 rounded-lg px-4 py-3">
        <h1 className="font-semibold text-2xl ">{data.taskCount.completed}</h1>
        <h1 className="font-semibold text-2xl ">Completed</h1>
      </div>
      <div className="w-[45%] bg-emerald-400 rounded-lg px-4 py-3">
        <h1 className="font-semibold text-2xl ">{data.taskCount.failed}</h1>
        <h1 className="font-semibold text-2xl ">Failed</h1>
      </div>
      <div className="w-[45%] bg-yellow-400 rounded-lg px-4 py-3">
        <h1 className="font-semibold text-2xl ">{data.taskCount.active}</h1>
        <h1 className="font-semibold text-2xl ">Active</h1>
      </div>
    </div>
  );
};

export default TaskListNumber;
