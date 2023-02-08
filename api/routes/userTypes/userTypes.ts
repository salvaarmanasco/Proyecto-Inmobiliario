const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.UserType.findAll({
      include: {
        model: db.User,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("UserType not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { admin } = req.body;
  try {
    let result = await db.UserType.create({
      admin: admin,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the userType");
  }
});

export default router;
