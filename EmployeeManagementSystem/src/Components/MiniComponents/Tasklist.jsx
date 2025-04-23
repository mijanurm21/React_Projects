import React, { useContext } from "react";
import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";
import AuthProvider, { Authcontext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  console.log(data);

  const ldat = useContext(Authcontext);
  console.log(ldat);
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] mt-10 flex items-center flex-nowrap gap-4"
    >
      {data.tasks.map((item, index) => {
        if (item.active) {
          return <AcceptTask key={index} item={item} />;
        }
        if (item.completed) {
          return <CompleteTask key={index} item={item} />;
        }
        if (item.failed) {
          return <FailedTask key={index} item={item} />;
        }
        if (item.newTask) {
          return <NewTask key={index} item={item} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
