
const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://TestForWT:Test123@cluster0.h1dvtba.mongodb.net/WebTechA4?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Connection Error:", err));

const usersRouter = require("./routers/users");
app.use("/users", usersRouter);

const productsRouter = require("./routers/products");
app.use("/products", productsRouter);

const commentsRouter = require("./routers/comments");
app.use("/comments", commentsRouter);

const ordersRouter = require("./routers/orders");
app.use("/orders", ordersRouter);

const cartRouter = require('./routers/cart.js');
app.use('/cart', cartRouter);

app.listen(9000, () => {
  console.log("Server started");
  console.log("app listening on port localhost:9000");
});
