import express from "express";
import authMiddleware from "../midddleware.js";
import Account from "../models/account.js";
import { transferBody } from "../type.js";
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  console.log("here is " + req.userId)
  const account = await Account.findOne({ userId: req.userId });
  console.log(account)
  res.status(200).json({ balance: account.balance });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { success } = transferBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ massage: "wrong input" });
  }
  const toacc = await Account.findOne({ userId: req.body.userId });
  if (!toacc) {
    return res.status(411).json({ massage: "invalid account" });
  }
  const account = await Account.findOne({ userId: req.userId });
  if (req.body.amount > account.balance) {
    return res.status(411).json({ massage: "Insufficient balance" });
  }

  const reducebal = await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -req.body.amount } }
  );
  const increasebal = await Account.updateOne(
    { userId: toacc.userId },
    { $inc: { balance: +req.body.amount } }
  );

  res.status(200).json({
    massage: "transaction sucessful",
  });
});

export default router;
