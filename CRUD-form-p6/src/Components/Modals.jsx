import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modals = ({ selected, SetisUpdate, updateMember }) => {
  const [updatedData, setUpdatedData] = useState({ name: "", email: "", password: "" });



  useEffect(() => {
    if (selected && Object.keys(selected).length > 0) {
      setUpdatedData(selected);
    }
  }, [selected]);


  const handleClose = () => {
    SetisUpdate(false);
  };

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateMember(updatedData);
    SetisUpdate(false);  
  };

  return (
    <>
    
      <div className="backdrop-blur absolute top-0 left-0 h-screen w-full bg-black/50" onClick={handleClose} />

     
      <div className="relative z-50 min-h-[200px] max-w-[80%] bg-red-200 p-5 rounded-md shadow-lg mx-auto mt-20">
        <div className="flex justify-end">
          <IoCloseOutline className="text-2xl cursor-pointer" onClick={handleClose} />
        </div>

  
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={updatedData.name} onChange={handleChange} className="border p-2 rounded" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={updatedData.email} onChange={handleChange} className="border p-2 rounded" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={updatedData.password} onChange={handleChange} className="border p-2 rounded" />

          <button onClick={handleUpdate} className="rounded bg-green-500 text-white p-2 mt-4 cursor-pointer
          ">Update</button>
        </div>
      </div>
    </>
  );
};

export default Modals;
