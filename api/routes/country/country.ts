const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.Country.findAll({
      include: {
        model: db.Property,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Country not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { country_name } = req.body;
  try {
    let result = await db.Country.create({
      country_name,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the country");
  }
});

export default router;
