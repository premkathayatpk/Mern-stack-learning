import express from "express";
import productRoutes from "./routes/productRoutes.js";
import connectDb from "./connectDb/connect.js";
const app = express();
connectDb();
//  Application setting
app.use(express.json());

// http://localhost:9000/api/product
// base routes
app.use("/api/product", productRoutes);

app.listen(9000, () => {
  console.log("Server is running at port number 9000.!");
});

// MVC Arch.
// mvc=model ,view(React),controller
