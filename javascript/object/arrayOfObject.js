const products = [
  {
    id: 1,
    name: "abc",
    price: 2000,
    quantity: 10,
  },
  {
    id: 2,
    name: "mno",
    price: 4000,
    quantity: 20,
  },
  {
    id: 3,
    name: "xyz",
    price: 5000,
    quantity: 100,
  },
  {
    id: 4,
    name: "pqr",
    price: 30000,
    quantity: 200,
  },
  {
    id: 5,
    name: "iphone",
    price: 90000,
    quantity: 7000,
  },
];
// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[0].price)
// console.log(products[0].id)

// products.forEach((item) => {
//   console.log(item.name);
//   console.log(item.price);
//   console.log(item.id);
// });

//1. wa function that will calculate the total no. of qty of all products (reduce)

const totalQty = () => {
  return products.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};
console.log("Total Num of qty: ", totalQty());

//2. wa function that will calculate the total price all products (reduce)
const totalPrice = () => {
  return products.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
};
console.log("Total price:", totalPrice());

// 3. wrt a function that will find out more  than 5000 product price (filter)
const moreThan5000 = () => {
  return products.filter((item) => {
    return item.price > 5000;
  });
};
console.log("Price of product is grater than 5000", moreThan5000());

//4. wrt a function that will  print the price of iphone. (find)
const priceOfIphone = () => {
  return products.find((item) => {
    return item.name == "iphone";
  });
};
console.log(priceOfIphone().price);

//5. wrt a function that will  calculate  the total  price of iphone. (find)
let moblie = products.find((item) => {
  return item.name == "iphone";
});
console.log(moblie.price * moblie.quantity);

// 6. wrt a function that increase the  price of product by 2 times  whose id is odd. (filter and map)
let newProducts = () => {
   let filterProduct=products.filter((item) => {
    return item.id % 2 != 0;
  });
  return filterProduct.map((item)=>{
    return{
      ...item,
       price:item.price*2
    }
  })
};
console.log(newProducts());
