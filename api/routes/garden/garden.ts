const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.Garden.findAll({
      include: {
        model: db.Property,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Garden not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { garden_name } = req.body;
  try {
    let result = await db.Garden.create({
      garden_name,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the garden");
  }
});

export default router;
