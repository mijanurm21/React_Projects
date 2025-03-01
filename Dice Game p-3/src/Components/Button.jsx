import React from 'react';

const Button = ({ text, isTrue, handle, onClick }) => {
  return (
    <button
      type="button"
      className={`p-2 border-2 flex items-center justify-center font-semibold text-xl 
        ${isTrue ? 'h-10 w-[calc(100%-15px)]' : 'h-12 w-12'} 
        hover:bg-black hover:text-white duration-300`}
      onClick={text === "Show Rules" ? handle : onClick}
    >
      {text}
    </button>
  );
};

export default Button;
