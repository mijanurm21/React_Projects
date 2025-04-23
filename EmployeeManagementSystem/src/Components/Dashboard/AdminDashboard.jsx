import React from "react";
import Header from "../MiniComponents/Header";
import CreateTask from "../MiniComponents/CreateTask";
import AllTask from "../MiniComponents/AllTask";

const AdminDashboard = ({ userLoggedInData, changeUser }) => {
  // console.log(userLoggedInData);
  // console.log("heoow");
  return (
    <div className="bg-[#1C1C1C] h-screen p-6">
      <Header data={userLoggedInData} changeUser={changeUser} />
      <CreateTask data={userLoggedInData} />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
