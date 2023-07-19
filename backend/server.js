import express from "express";
import dotenv from "dotenv"
dotenv.config();
import  connectDB from "./config/db.js";
import products from "./data/products.js";
const port = process.env.PORT || 5000;
connectDB();

const app = express(); 

app.get('/', (req, res) => {
    res.send("Welcome")
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get('/api/products', (req, res) => {
    const product = products;
    res.json(product);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});