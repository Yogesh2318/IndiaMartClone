import Product from "../modules/product.module.js";
import Costumer from "../modules/costumer.module.js";
import Seller from "../modules/seller.module.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message, getAllProducts: "error" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message, getProductById: "error" });
    }
};

export const getAllProductsbyCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found in this category" });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message, getAllProductsbyCategory: "error" });
    }
};

export const sellProduct = async (req, res) => {
    try {
        const { name, price, description, image, category, stock } = req.body;

        const product = new Product({
            name,
            price,
            description,
            image,
            category,
            stock,
        });

        await product.save();

        // Optional: Associate product with seller if using authentication
        // const sellerId = req.user.id;
        // const sellerUser = await Seller.findById(sellerId);
        // if (sellerUser) {
        //     sellerUser.products.push(product._id);
        //     await sellerUser.save();
        // }

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message, sellProduct: "error" });
    }
};

export const addproduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const foundProduct = await Product.findById(productId);
        if (!foundProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        const customerId = req.user.id;
        const customer = await Costumer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        customer.products.push(foundProduct._id);
        await customer.save();

        res.status(201).json(foundProduct);
    } catch (error) {
        res.status(500).json({ message: error.message, addproduct: "error" });
    }
};
