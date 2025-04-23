import React, { useContext, useState } from "react";
import { Authcontext } from "../../context/AuthProvider";

import { ToastContainer, toast } from "react-toastify";

const CreateTask = () => {
  const data = useContext(Authcontext);

  // console.log(data);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newTask, setNewTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, date, assignTo, category, description);
    const latestTask = {
      title,
      date,
      assignTo,
      category,
      description,
      active: true,
      failed: false,
      completed: false,
      newTask: true,
    };

    const matchedEmployee = data.employee.find(
      (item) => assignTo.toLowerCase() === item.name.toLowerCase()
    );

    if (matchedEmployee) {
      matchedEmployee.tasks.push(latestTask);
      localStorage.setItem("employee", JSON.stringify(data.employee));
    } else {
      toast.error("No such employee found!");
    }

    setAssignTo("");
    setTitle("");
    setDate("");
    setCategory("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-7 bg-[#3c3c3c] min-h-[60vh] rounded-xl px-4 md:px-7 py-5 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div>
              <h2 className="text-sm mb-1 font-semibold">Task Title</h2>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-600 text-md p-2 rounded-md w-full md:w-[70%] focus:outline-none focus:border-emerald-500"
                type="text"
                placeholder="Enter project title"
              />
            </div>
            <div>
              <h2 className="text-sm mb-1 font-semibold">Date</h2>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-600 text-md p-2 rounded-md w-full md:w-[70%] focus:outline-none focus:border-emerald-500"
                type="date"
              />
            </div>
            <div>
              <h2 className="text-sm mb-1 font-semibold">Assign To</h2>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="border border-gray-600 text-md p-2 rounded-md w-full md:w-[70%] focus:outline-none focus:border-emerald-500"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h2 className="text-sm mb-1 font-semibold">Category</h2>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-600 text-md p-2 rounded-md w-full md:w-[70%] focus:outline-none focus:border-emerald-500"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5 items-start md:items-center">
            <h2 className="text-sm font-semibold">Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-600 text-md p-2 rounded-md w-full md:w-[75%] h-40 resize-none focus:outline-none focus:border-emerald-500"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-500 py-2 rounded-md w-full md:w-[75%]"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default CreateTask;
