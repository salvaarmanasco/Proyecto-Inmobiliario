import express from "express";
import db from "./models";
import router from "./routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use("/", router);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
