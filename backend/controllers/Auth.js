const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//sign up

exports.signup = async (req, res) => {
  try {
    //extract from req body
    const {
      email,
      password,
      name,
      phone,
      photo,
      role,
      gender,
      bloodType,
      appointments,
    } = req.body;

    // validation
    if (
      !email ||
      !password ||
      !name ||
      !phone ||
      !role ||
      !gender ||
      !bloodType
    )
      return res.status(400).json({
        success: false,
        messgage: "please field all the fields",
      });

    // check user already exist or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exist. Please signIn to continue",
      });
    }

    //hashing the password
    let hashedPassword = await bcrypt.hash(password, 10);

    //creating the user
    const user = await User.Create({
      email,
      password: hashedPassword,
      name,
      phone,
      photo,
      role,
      gender,
      bloodType,
      appointments,
    });

    return res.status(200).json({
      success: true,
      user,
      messgae: "user registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};


exports.login = async (req, res) => {
  try {
    const {email, password } = req.body;
    //check for empty fields
    if(!email || !password)
    {
        return res.status()
    }
  } catch (error) {

  }
};
