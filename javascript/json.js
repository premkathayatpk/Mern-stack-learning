// const jdata=JSON.stringify(user)
// console.log(jdata)
// console.log(JSON.parse(jdata))

// user.json()  and JSON.parse(jdata)

// client---API----Backend----DB
//http://localhost:5173/products
//http- protocol
//localhost:5173 - domain name
//products,user, - end point

// http methods
// Get(read),featch,delete,put/ (update)

//data featch from api using promise---------------

// let res=fetch('https://dummyjson.com/products', {
//  method: "GET"
// })

// res.then((data)=>{
//   return data.json()
// }).then((data)=>{
//  console.log(data.products)

// })
// .catch((err)=>{
//   console.log(err)
// })

//data featch from api using async await-----------

// const getProduct = async () => {
//   try {
//     let res = await fetch("https://dummyjson.com/products", {
//       method: "GET",
//     });

//     res = await res.json();
//     console.log(res.products);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getProduct();

// //1. wrt a function that will calculate the total number of quantity of all products
const qtyOfProduct = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    data = await res.json();

    const totalQty = data.products.reduce((sum, item) => {
      return (sum += item.stock);
    }, 0);
    console.log("Total no. of Qty. of all products =", totalQty);
  } catch (err) {
    console.log(err);
  }
};
qtyOfProduct();

//2. wrt a function that will calculate the total price all product
const calTotalPrice = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    data = await res.json();

    let totalPrice = data.products.reduce((acc, item) => {
      return (acc += item.stock * item.price);
    }, 0);
    console.log("Total price of all products =", totalPrice);
  } catch (err) {
    console.log(err);
  }
};
calTotalPrice();
//3. wrt a function that will find out more  than 2000 product price
const PriceMorethan1000 = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    data = await res.json();

    let moreThan1000 = data.products
      .filter((item) => {
        return item.price > 1000;
      })
      .map((item) => ({
        title: item.title,
        price: item.price,
      }));
    console.log(" All products with price >1000 are: ");
    console.log( moreThan1000)
  } catch (err) {
    console.log(err);
  }
};
PriceMorethan1000();

//4. wrt a function that will  print the price of abc.
const printPriceOf = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    data = await res.json();

    let product = data.products.find((item) => {
      return item.title === "Essence Mascara Lash Princess";
    });
    if (product) {
      console.log(`Price of ${product.title} products =`, product.price);
    } else {
      console.log("product is not found");
    }
  } catch (err) {
    console.log(err);
  }
};
printPriceOf();

//5. wrt a function that will  calculate  the total  price of abc.
const printTotalPriceOf = async () => {
  try {
    let res = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    data = await res.json();

    let product = data.products.find((item) => {
      return item.title === "Essence Mascara Lash Princess";
    });
    if (product) {
      console.log(
        `Total price of ${product.title} products =`,
        product.price * product.stock
      );
    } else {
      console.log("product is not found");
    }
  } catch (err) {
    console.log(err);
  }
};
printTotalPriceOf();
