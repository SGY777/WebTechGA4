const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://TestForWT:Test123@cluster0.h1dvtba.mongodb.net/WebTechA4?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Connection Error:", err));

const usersRouter = require("./routers/users");
app.use("/users", usersRouter);

const productsRouter = require("./routers/products");
app.use("/products", productsRouter);

app.listen(9000, () => {
  console.log("Server started");
});
