const { Router } = require("express");
import { v4 as uuidv4 } from "uuid";
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.User.findAll({
      include: {
        model: db.UserType,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Users not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { name, email } = req.body;
  try {
    let result = await db.User.create({
      id: uuidv4(),
      name: name,
      email: email,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the user");
  }
});

export default router;
