import React from "react";

const Todo = () => {
  return (
    <div className=" rounded-2xl mt-10 m-auto w-150 p-4 bg-gray-200 ">
      <div className=" flex justify-center">
        <input
          className="border rounded-sm w-7/10 p-1.5  bg-white"
          type="text"
          placeholder="Enter Todo Item"
        />
        <button className="bg-blue-600 w-22 p-1 text-white rounded-xl ">
          Add Todo
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-center p-1 text-green-800">
          Items
        </h1>
        <div className="bg-white mt-2 p-1.5 items-center rounded-xl flex flex-wrap justify-between">
          <p>Apple</p>
          <div className="space-x-0.5">
            <button className="bg-green-500 w-10 p-1 rounded-sm">Edit</button>
            <button className="bg-red-600 w-14 rounded-sm p-1">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
