import express from "express";
import { signinBody, signupBody, upadateUserBody } from "../type.js";
import User from "../models/user.js";
import { generateToken } from "../jwt.js";
import authMiddleware from "../midddleware.js";
import Account from "../models/account.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
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

  
  const account = await Account.create({
    userId: userId,
    balance: Math.floor((Math.random() * 10000) + 1)
  })
  
  return res.status(200).json({
    message: "User created successfully",
    balance: account.balance,
    token: token,
  });
});

router.post("/signin", async (req, res) => {
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

router.get('/profile', authMiddleware, async (req, res) => {
  // console.log(req.userId)
  const userId = req.userId;

  const user = await User.findOne({
    _id: userId
  })

  if(!user){
    return res.status(411).json({
      massage: "user not found"
    })
  }

  res.status(200).json({user})

})

router.put('/', authMiddleware, async (req, res) => {
  const {success} = upadateUserBody.safeParse(req.body)
  if (!success) {
    return res.status(411).json({
      message: "wrong inputs",
    });
  }

  const userId = req.userId;

  const user = await User.findOne({
    _id: userId
  })

  if(!user){
    return res.status(411).json({
      massage: "user not found"
    })
  }


  const response = await User.updateOne({_id: userId},{
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

  return res.status(200).json("update done")


})


router.get('/bulk' , async (req,res) => {
  const filter = req.query.filter || "";


  const users = await User.find({$or:[
    {username: {$regex: filter}},
    {firstName: {$regex: filter}},
    {lastName: {$regex: filter}}
  ]})

  res.status(200).json({
    users: users
  })

})

export default router;
