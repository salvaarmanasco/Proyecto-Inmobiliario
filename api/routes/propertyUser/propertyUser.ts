const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyUser.findAll();
    if (!result) res.status(404).send("The PropertyUser relationship no exist");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-State relationship make a error");
    console.log(error);
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, UserId } = req.body;
  try {
    let result = await db.PropertyUser.create({
      PropertyId,
      UserId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-State relationship");
  }
});

export default router;
