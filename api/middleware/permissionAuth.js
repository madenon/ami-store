import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    console.log(user?.role);
    if (!user) {
      return res.json({
        success: false,
        error: true,
        message: "utilisateur n'existe pas",
      });
    }
    if (user?.role !== "ADMIN") {
      return res.json({
        success: false,
        error: true,
        message: "Vous n'etes pas admin",
      });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch && user?.role === "ADMIN") {
        const token = createToken(user._id);
        res.json({ success: true, error: false, token });
      } else {
        res.json({
          success: false,
          error: true,
          message: "Email ou mot de passe incorrecte",
        });
      }
    }
  } catch (error) {
    res.json({ success: false, error: true, message: error.message });
  }
};

