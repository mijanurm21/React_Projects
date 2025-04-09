import React from 'react';

const Stripe = ({ val }) => {
  return (
    <div className="flex">
      {val.map((elem, index) => (
        <div
          key={index}
          className="w-[16.67%] border-b-[2px] border-t-[2px] border-r-[2px] border-zinc-600 px-4 py-2 flex justify-between"
        >
          <span className="text-lg">{elem.name}</span>
          <span className="text-lg">{elem.number}</span>
        </div>
      ))}
    </div>
  );
};

export default Stripe;
