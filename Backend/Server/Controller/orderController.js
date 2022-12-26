import Order from '../Model/Order.js';

export const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getOrders = async (req, res) => {
    try {
        const userOrders = await Order.find({ userId: req.params.id });
        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getAllOrders = async (req, res) => {
    try {
        const Orders = await Order.find();
        res.status(200).json(Orders);
    } catch (error) {
        res.status(500).json(error);
    }
}
//Get monthly income
export const getOrderStats = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                },
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
}