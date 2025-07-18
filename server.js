import express from "express";
import bodyParser from "body-parser";
import { router as adminRoutes } from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import path from "path";
import appRoot from "./utils/appRoot.js";

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(appRoot, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Page Not Found", path: "" });
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
