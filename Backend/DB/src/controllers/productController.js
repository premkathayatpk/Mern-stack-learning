import Product from "../model/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    // Database query to store the data in the  database
    // let resProduct = await Product.create({ title, price, description });
    let productInfo = await new Product({ title, price, description });
    productInfo = await productInfo.save();
    console.log(productInfo);
    res.send("product is created");
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    let productInfo = await Product.find();
    // let productInfo = await Product.findOne();
    // let productInfo = await Product.find({price:4500000});
    //   let productInfo = await Product.findById({ _id: "69943c692ca7870c88e4e86d" });
    console.log(productInfo);
    res.send("Product Is Found");
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    // id
    // price
    let productInfo = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );
    console.log(productInfo);
    res.send("Product id Updated");
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let productInfo = await Product.findByIdAndDelete({ _id: id });
    console.log(productInfo);
    res.send("Product Is Deleted");
  } catch (error) {
    console.log(error);
  }
};
