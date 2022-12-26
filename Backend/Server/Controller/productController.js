import Product from '../Model/Product.js';

export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getAllProduct = async (req, res) => {
    const qNew = req.query.new;
    const qcategory = req.query.category;
    try {
        let product;
        if (qNew) {
            product = await Product.find().sort({ createdAt: -1 }).limit(5);
        }
        else if (qcategory) {
            product = await Product.find({ categories: { $in: [qcategory] }, })
        }
        else {
            product = await Product.find();
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

