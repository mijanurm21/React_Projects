import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { Authcontext } from "./context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(null); // admin h ya employee h ??
  const [userLoggedInData, setuserLoggedInData] = useState(null); // jonsa admin ya employee uska data

  const data = useContext(Authcontext); // value in provider  {employee admin }
  // console.log(data);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
      setUser(loggedInUser.role);
      setuserLoggedInData(loggedInUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!data) {
      alert("No authentication data available");
      return;
    }

    const admin = data.admin.find(
      (e) => email === e.email && password === e.password
    );

    if (admin) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
      setUser("admin");
      setuserLoggedInData(admin);
      return;
    }

    const employee = data.employee.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setUser("employee");
      setuserLoggedInData(employee);
      return;
    }

    toast.error("Invalid Credentials!");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? (
        <AdminDashboard
          userLoggedInData={userLoggedInData}
          changeUser={setUser}
        />
      ) : user == "employee" ? (
        <EmployeeDashboard
          changeUser={setUser}
          userLoggedInData={userLoggedInData}
        />
      ) : null}
      <ToastContainer position="center" autoClose={3000} />
    </>
  );
};

export default App;
