import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// create toekn
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// User Login

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        error: true,
        message: "utilisateur n'existe pas",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, error: false, token, message:"Connexion réussie" });
    } else {
      res.json({
        success: false,
        error: true,
        message: "Email ou mot de passe incorrecte",
      });
    }
  } catch (error) {
    res.json({ success: false, error: true, message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password, password2 } = req.body;

    // checking user already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "email existe déjà" });
      // validaing email format & strong password
    }
    if (password !== password2) {
      return res.json({
        success: false,
        error: true,
        message: "Mot de passe on identique",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        error: true,
        message: "Le mot de passe doit contenir au moins 8 caractères",
      });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Entrez un email valide" });
    }
    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token, message:"Inscription réussie  avec succès" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: true, message: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      (email === process.env.ADMIN_EMAIL &&
        password===process.env.ADMIN_PASSWORD) ||
      (email===process.env.ADMIN_EMAIL2 &&
        password === process.env.ADMIN_PASSWORD2) ||
      (email === process.env.ADMIN_EMAIL3 &&
        password === process.env.ADMIN_PASSWORD3)
    ) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success:true,token,error:false})
    }else{
      res.json({success:false, error:true,message:"Données invalides"})
    }
  } catch (error) {
console.log(error)
res.json({success:false, error:true, message:error.message})
  }
};

export { loginuser, registerUser,adminLogin };
