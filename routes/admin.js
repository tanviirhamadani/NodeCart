import express from "express";
import path from "path";
import appRoot from "../utils/appRoot.js";

const products = [];
const router = express.Router();
//  /admin routes
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(appRoot, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { router, products };
