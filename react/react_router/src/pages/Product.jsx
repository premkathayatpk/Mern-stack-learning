import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let res = await fetch("https://dummyjson.com/products");
    res = await res.json();
    // console.log(res.products);
    setProduct(res.products);
  };
  useEffect(() => {
    getProduct();
  }, []);
  //1. first one time it get called
  //2. without array of dependency -if any state get change than it call itself
  //3. if empty  dependency []- it call only one time
  //4. if any dependency is provided, than it call itself when that value get change

  return (
    <div>
      {
        product.length>0?
        <div className="flex p-10 flex-wrap gap-5 justify-center bg-gray-400">
          {
            product.map((item)=>{
              return <div key={item.id} className="bg-white p-3 w-52 shadow-2xl rounded-2xl">
                <img src={item.thumbnail} alt="Thumbnail" />
                <h1>{item.title}</h1>
                <h1>Rs.{item.price}</h1>
                <h1>{item.rating}</h1>
                </div>

            })
          }
        </div>:<div>Loding.......</div>
      }
    </div>
  );
};

export default Product;
