
const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const {z} = require("zod");
const { registerSchema } = require("../ZodSchema");
const { loginSchema } = require("../ZodSchema");
const Register = async (req, res) => {
    // Validate request body
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(401).json({
            message: "Data not in proper format",
            error: result.error.errors,
        });
    }

    try {
        const { name, email, dateOfBirth, password } = result.data;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already registered",
            });
        }

       
        const hashPassword = await bcrypt.hash(password, 10);

        // Store user in database
        await User.create({
            name,
            email,
            password: hashPassword,
            dateOfBirth,
        });

        return res.status(201).json({
            message: "User registered successfully",
        });
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({
            message: "Server issue",
            error: error.message,
        });
    }
};




const Login = async (req, res) => {
    
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Data is not in proper format",
            error: result.error.errors,
        });
    }

    try {
        const { email, password } = result.data;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not registered",
            });
        }

      
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect password",
            });
        }

      
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "2h",
        });

        return res.status(200).json({
            message: "User logged in successfully",
            token,
        });
    } catch (error) {
        console.error("Server Error:", error);
        return res.status(500).json({
            message: "Server issue",
            error: error.message,
        });
    }
};




module.exports ={ Register,Login};
