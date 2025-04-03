const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

router.get("/getUserCart/:userId", async (req, res) => {

    const userId = req.params.userId;

    try {
        const cartItems = await Cart.find({ user: userId }).populate('product');
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post("/addToCart", async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cartItem = new Cart({ user: userId, product: productId });
        await cartItem.save();
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete("/removeFromCart/:cartId", async(req,res) => {
    const cartId = req.params.cartId;

    try {
        if(!cartId) return res.status(400).json({ message: "Cart ID is required" });
        const cartItem = await Cart.findByIdAndDelete(cartId);
        if(!cartItem) return res.status(404).json({ message: "Cart item not found" });
        res.status(200).json({ message: "Cart item removed successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
