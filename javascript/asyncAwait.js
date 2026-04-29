const getProducts = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products");

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(err);
  }
};
getProducts();

const createProduct = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Shoe",
      price: 1500,
      userId: 1,
    }),
  });
  const data = await res.json();
  console.log("Product created succ");
};
createProduct();
