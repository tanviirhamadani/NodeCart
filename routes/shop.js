import express from "express";
import path from "path";
import appRoot from "../utils/appRoot.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(appRoot, "views", "shop.html"));
});

export default router;
