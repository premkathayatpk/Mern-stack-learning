import React from "react";
import Card from "./components/Card";

const App = () => {
  const products = [
    {
      title: "iPhone13",
      price: 100000,
      image:
        "https://th.bing.com/th/id/OIP.NXsXbsm7dCbj9v3KdFEeTwHaKE?w=146&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      title: "iPhone13",
      price: 100000,
      image:
        "https://th.bing.com/th/id/OIP.BLpUmXNEN5ov0AuwIyURSQHaFA?w=286&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      title: "iPhone13",
      price: 100000,
      image:
        "https://th.bing.com/th/id/OIP.kS8WxNFl6Oj_UAnCsJbAyAHaKX?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  const buyNow = () => {
    alert("Buy product succ");
  };
  return (
    <div>
      <Card products={products} onClick={buyNow} />
    </div>
  );
};

export default App;
