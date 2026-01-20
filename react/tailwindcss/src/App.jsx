import React from "react";
import { FcGoogle } from "react-icons/fc";

const App = () => {
  return (
    <>
      <div className="nav py-3 px-10 bg-black text-white flex justify-between items-center">
        <div className="logo font-bold text-2xl flex">
          <FcGoogle size={30}/>
          <h1>Logo</h1>
        </div>
        <div>
          <ul  className="text-gray-300 flex gap-3 justify-center list-none">
            <li>Services</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>
        <div className="contact">
          <button className="bg-cyan-400 rounded-lg p-1 w-20">Contact</button>
        </div>
      </div>
    </>
  );
};

export default App;
