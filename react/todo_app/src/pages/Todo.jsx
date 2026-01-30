import { useState } from "react";

const Todo = () => {
  const [inputVla, setInputVal] = useState("");
  const [task, setTask] = useState([]);

  const addTodo = (e) => {
    if (!inputVla) return;

    if (task.includes(inputVla)) {
      console.log("Item already exist");
      setInputVal("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputVla]);
    // console.log(task);
    setInputVal("");
  };

  const deleteTodo = (value) => {
    // console.log(value);
    const updTask = task.filter((currTask) => currTask !== value);
    setTask(updTask);
  };

  const clearAll = () => {
    setTask([]);
  };

  return (
    <div className=" rounded-2xl mt-10 m-auto w-150 p-4 bg-gray-200 ">
      <div className=" flex justify-center">
        <input
          value={inputVla}
          onChange={(e) => {
            setInputVal(e.target.value);
            // console.log(e.target.value);
          }}
          className="border rounded-sm w-7/10 p-1.5  bg-white"
          type="text"
          placeholder="Enter Todo Item"
        />
        <button
          onClick={() => {
            addTodo();
          }}
          className="bg-blue-600 w-22 p-1 text-white rounded-xl "
        >
          Add Todo
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-medium text-center p-1 text-green-800">
          Items
        </h1>
        {task.map((currTask, index) => {
          return (
            <div
              key={index}
              className="bg-white mt-2 p-1.5 items-center rounded-xl flex flex-wrap justify-between"
            >
              <p>{currTask}</p>
              <div className="space-x-0.5">
                <button className="bg-green-500 w-10 p-1 rounded-sm">
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteTodo(currTask);
                  }}
                  className="bg-red-600 w-14 rounded-sm p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <div className="mt-5 text-center">
          <button
            onClick={() => {
              clearAll();
            }}
            className="bg-red-700 py-1 px-2  rounded-xl text-white"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
