import React, { useState } from "react";

const ToggleBtn = () => {
  const [show, setShow] = useState(false);

  const toggleText = () => {
    setShow(!show);
  };
  return (
    <div className="text-center mt-30">
      <button
        className="bg-green-500 px-4 py-1 rounded-md"
        onClick={toggleText}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && <p>This is hidden text</p>}
    </div>
  );
};

export default ToggleBtn;
