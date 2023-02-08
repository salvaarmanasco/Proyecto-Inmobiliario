import express from "express";
const app = express();
const port = process.env.PORT || 3001;
import db from "./models";
import { users } from "./seeders/users";
import { userTypes } from "./seeders/usertypes";
import { userassignments } from "./seeders/userassignments";

/* const createUser = () => {
  users.map((user) => {
    db.User.create(user);
  });
};
createUser(); */

/* const createUserType = () => {
  userTypes.map((u) => {
    db.UserType.create(u);
  });
};
createUserType(); */

/* const assignment = () => {
  userassignments.map((ua) => {
    db.UserAssignments.create(ua);
  });
};
assignment(); */

/*  app.get("/", (req, res) => {
  db.User.findAll({
    include: {
      model: db.UserType,
    },
  })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.log(err));
}); 
 */
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
