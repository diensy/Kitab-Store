import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
export const Signup = async (req, res) => {
  try {
    const { fullname, email, phonenumber, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(200).json({
      message: "User Created Successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.error("Error " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Username and Password" });
    } else {
      res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error : " + error.message);
    res.status(500).json({ message: "Internal Server Error " });
  }
};
