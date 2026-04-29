import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncHandle = () => {
    setCount(count + 1);
  };
  const DecHandle = () => {
    setCount(count - 1);
  };

  return (
    <div className="m-auto text-center mt-25 p-5  rounded-xl shadow-xl shadow-gray-400 w-80">
      <h1 className="text-5xl font-bold ">{count}</h1>
      <button
        className="bg-green-500 rounded-md  px-4 py-1 m-3 text-white text-xl font-semibold "
        onClick={IncHandle}
      >
        Increase
      </button>
      <button
        className="bg-red-500 rounded-md px-4 py-1 m-3 text-white text-xl font-semibold "
        onClick={DecHandle}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
