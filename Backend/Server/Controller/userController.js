import User from '../Model/User.js';

export const updateUser = async (req, res, next) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }
    try {
        console.log(req.body);
        const updateduser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted Successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...otherDetails } = user._doc;
        res.status(200).json(otherDetails);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const getAllUser = async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUserStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}