import Product from '../models/products.models.js';

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    if (products.length > 1) {
        res.json(products)
    }else{
        res.json([])
    }
}

export const createProduct = async (req, res) => {
    const product = new Product(req.body);
    const newProduct = await product.save();
    if (newProduct) {
        return res.json({ message: "Product Created successfully" })
    }
    return res.json({ message: "Product Not Found" })
}
