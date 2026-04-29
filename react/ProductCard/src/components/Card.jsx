import React from "react";

const Card = ({ products, onClick }) => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {products.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <img src={item.image} alt={item.title} style={{ width: "150px" }} />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={onClick}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
