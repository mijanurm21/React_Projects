import React from "react";

const AcceptTask = ({ item }) => {
  // console.log(item);

  const handleComplete = () => {
    const count = item.taskCount.active;
    item.taskCount.active = count + 1;
  };
  const handleFailed = () => {
    item.taskCount.failed += 1;
  };
  return (
    <div className="bg-yellow-400 w-[18vw] h-[37vh] flex-shrink-0   rounded-xl ">
      <div className="flex justify-between px-2 py-2">
        <p className="bg-red-300 px-2 py-1 text-sm rounded h-[4vh]">
          {item.category}
        </p>
        <p className="text-sm font-medium">{item.date}</p>
      </div>
      <div>
        <p className="text-xl mt-4 px-2 font-semibold">{item.title}</p>
        <p className="text-sm mt-2 px-2">{item.description}</p>
      </div>
    </div>
  );
};

export default AcceptTask;
