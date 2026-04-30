import React, { useEffect, useState } from "react";

const App = () => {
  //useEffect Types

  //  1.No dependency array (Run on Every Render)

  useEffect(() => {
    console.log("Runs on every render");
  });

  // 2. Empty array/dependency → (runs once after first render)
  useEffect(() => {
    console.log("Run only once");
  }, []);

  // 3. Dependency change (Runs only when count updates)
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count updated: ", count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default App;
