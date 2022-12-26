import User from '../Model/User.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
export const registerUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }

}
export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        const hashedPassword = CryptoJS.AES.decrypt(user?.password, process.env.SECRET_KEY);
        !user && res.status(401).json("Wrong Credential");
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        Originalpassword !== req.body.password && res.status(401).json("Wrong Credential");
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.admin,
        }, process.env.JWT_SEC,
            { expiresIn: "3d" });
        const { password, ...otherDetails } = user._doc;
        res.status(200).json({...otherDetails,accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
}