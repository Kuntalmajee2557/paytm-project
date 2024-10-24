import express from "express";
import { signinBody, signupBody } from "../type.js";
import User from "../models/user.js";
import { generateToken } from "../jwt.js";
const router = express.Router();

router.post("/user/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "user already exists",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  const token = generateToken({ userId });

  return res.status(200).json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/user/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "wrong inputs",
    });
  }
  const user = await User.findOne({
    username: req.body.username
  })
  if(!user){
    return res.status(411).json({
        massage: "User not found, singup first"
    })
  }

  const userId = user._id;

  const token = generateToken({userId})



  return res.status(200).json({
    token: token,
  });
});

export default router;
