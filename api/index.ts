import express from "express";
const app = express();
const port = process.env.PORT || 3001;
import db from "./models";
// import { users } from "./seeders/users";
// import { userTypes } from "./seeders/usertypes";
import { userassignments } from "./seeders/userassignments";

// const createUserAssignments = () => {
//   userassignments.map((userAssign) => {
//     db.UserAssignments.create(userAssign);
//   });
// };
// createUserAssignments();
app.get("/", (req, res) => {
  db.User.findAll({
    include: {
      model: db.UserType,
    },
  })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.log(err));
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
