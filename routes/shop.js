import express from "express";
import path from "path";
import appRoot from "../utils/appRoot.js";
import { products } from "./admin.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("shop.js", products);

  res.render("shop", { prods: products, docTitle: "Node Cart" });
});

export default router;
