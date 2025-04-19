import User from "../modules/user.module.js";
import Seller from "../modules/seller.module.js";
import Costumer from "../modules/costumer.module.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const Login = async (req, res) => {
    let { name, password } = req.body;
  try {
    if(name === "" || password === "") {
      return res.status(400).json({ error: "Email and password are required" });
    }
    name = name.toLowerCase();
    const loginName= await User.findOne({ name });
    if (!loginName) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, loginName.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
     
    let userRole;
    // Check if the user is a seller or a customer
    const isSeller = await Seller.findOne({ _id: loginName._id });
    const isCustomer = await Costumer.findOne({ _id: loginName._id });
    if (isSeller) {
        userRole = "seller";
      } else if (isCustomer) {
        userRole= "customer";
      } else {
        return res.status(401).json({ error: "User role not found" });
      }
    
      res.status(201).json({
        _id: loginName._id,
        name: loginName.name,
        email: loginName.email,
        role: userRole,
    
      });

    
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
    
  }
}

export const SignUp = async (req, res) => {
    const { name, email, password,role } = req.body;
    console.log("Signup data:", req.body);
    try {
        if (!name || !email || !password||!role) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            
        });
        if(role === "seller") {
            await Seller.create({
                ...newUser._doc,
                role: "seller"
            });
        }
        if(role === "customer") {
            await Costumer.create({
                ...newUser._doc,
                role: "customer"
            });
        }
        // const token = generateToken(newUser._id);
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role,
        
            
        });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const Logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ error: "Internal server error" });
    }   
}
