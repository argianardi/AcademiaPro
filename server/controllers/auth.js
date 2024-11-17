import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "6d",
  });
};

// Generate JWT
const createSendResToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const isDev = process.env.NODE_ENV === "development" ? false : true;
  const cookieOption = {
    expire: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    security: isDev,
  };

  res.cookie("jwt", token, cookieOption);

  user.password = undefined;

  res.status(statusCode).json({
    code: statusCode.toString(),
    status: "Success",
    message: "Admin created successfully",
    data: user,
  });
};

// Register Admin
export const registerUser = asyncHandler(async (req, res) => {
  const createUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: "admin",
  });

  createSendResToken(createUser, 201, res);
});

// Login Admin, Teacher, Student
export const loginUser = asyncHandler(async (req, res) => {
  // Email validation
  if (!req.body.email) {
    res.status(400);
    throw new Error("Please add an email");
  }

  // Password validation
  if (!req.body.password) {
    res.status(400);
    throw new Error("Please add a password");
  }

  const userData = await User.findOne({ email: req.body.email });

  if (userData && (await userData.comparePassword(req.body.password))) {
    createSendResToken(userData, 200, res);
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
