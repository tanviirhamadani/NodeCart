import express from "express";
import path from "path";
import appRoot from "../utils/appRoot.js";
import { products } from "./admin.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", products);

  res.sendFile(path.join(appRoot, "views", "shop.html"));
});

export default router;
