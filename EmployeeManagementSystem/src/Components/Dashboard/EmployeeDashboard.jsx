import React from "react";
import Header from "../MiniComponents/Header";
import TaskListNumber from "../MiniComponents/TaskListNumber";
import Tasklist from "../MiniComponents/Tasklist";

const EmployeeDashboard = ({ userLoggedInData, changeUser }) => {
  // console.log(userLoggedInData);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={userLoggedInData} changeUser={changeUser} />
      <TaskListNumber data={userLoggedInData} />
      <Tasklist data={userLoggedInData} />
    </div>
  );
};

export default EmployeeDashboard;
