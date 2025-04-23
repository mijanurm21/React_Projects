import React from "react";

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // localStorage.clear();
    // window.location.reload();
    changeUser("");
    console.log("this is" + changeUser);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <h1 className="text-lg sm:text-xl font-semibold">
        Hello, <br />
        <span className="text-2xl sm:text-3xl">{data.name}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 rounded-lg px-4 sm:px-5 text-base sm:text-lg py-1"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
