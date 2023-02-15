const { Router } = require("express");
import { v4 as uuidv4 } from "uuid";
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.Zone.findAll({
      include: {
        model: db.Property,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Zone not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { zone_name } = req.body;
  try {
    let result = await db.Zone.create({
      zone_name,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the zone");
  }
});

export default router;
