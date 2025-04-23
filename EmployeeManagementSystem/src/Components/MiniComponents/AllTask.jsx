import React, { useContext } from "react";
import { Authcontext } from "../../context/AuthProvider";

const AllTask = () => {
  const data = useContext(Authcontext);
  console.log(data);

  return (
    <div className="bg-[#3c3c3c] mt-3 rounded-md p-4 md:p-6 w-full overflow-x-auto">
      <div className="min-w-[600px] w-full">
        {/* Desktop Header */}
        <div className="hidden sm:flex bg-yellow-600 rounded-md p-3 justify-between font-semibold text-white sticky top-0 z-10">
          <h3>Name</h3>
          <h3>New</h3>
          <h3>Completed</h3>
          <h3>Active</h3>
          <h3>Failed</h3>
        </div>

        {/* Data Rows */}
        <div className="mt-2 space-y-3 max-h-[300px] overflow-y-auto">
          {data?.employee?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between  border border-emerald-400 rounded-md p-3 text-white text-sm sm:text-base"
            >
              <div className="sm:hidden space-y-1">
                <p>
                  <span className="font-semibold">Name:</span> {item.name}
                </p>
                <p>
                  <span className="font-semibold">New:</span>{" "}
                  {item.taskCount.newTask}
                </p>
                <p>
                  <span className="font-semibold">Completed:</span>{" "}
                  {item.taskCount.completed}
                </p>
                <p>
                  <span className="font-semibold">Active:</span>{" "}
                  {item.taskCount.active}
                </p>
                <p>
                  <span className="font-semibold">Failed:</span>{" "}
                  {item.taskCount.failed}
                </p>
              </div>

              <div className="hidden sm:flex justify-between w-full">
                <h3>{item.name}</h3>
                <h3>{item.taskCount.newTask}</h3>
                <h3>{item.taskCount.completed}</h3>
                <h3>{item.taskCount.active}</h3>
                <h3>{item.taskCount.failed}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
