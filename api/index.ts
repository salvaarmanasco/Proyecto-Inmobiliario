import express from "express";
const app = express();
const port = process.env.PORT || 3001;
import db from "./models";
import router from "./routes";

// const createUser = () => {
//   users.map((user) => {
//     db.User.create(user);
//   });
// };
// createUser();

// const createUserType = () => {
//   userTypes.map((u) => {
//     db.UserType.create(u);
//   });
// };
// createUserType();

// const assignment = () => {
//   userassignments.map((ua) => {
//     db.UserAssignments.create(ua);
//   });
// };
// assignment();

app.use(express.json());
app.use("/", router);
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
