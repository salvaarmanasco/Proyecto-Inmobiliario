const { Router } = require("express");
import { v4 as uuidv4 } from "uuid";
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.Property.findAll({
      include: {
        model: db.Condition,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const {
    antiquity,
    address,
    bedrooms,
    bathrooms,
    environments,
    pool,
    elevator,
    floor_th,
    orientation,
    m2_totals,
    m2_covered,
    garage,
    amenities,
    description,
    furnished,
    balcony,
    sign,
  } = req.body;
  try {
    let result = await db.Property.create({
      id: uuidv4(),
      antiquity,
      address,
      bedrooms,
      bathrooms,
      environments,
      pool,
      elevator,
      floor_th,
      orientation,
      m2_totals,
      m2_covered,
      garage,
      amenities,
      description,
      furnished,
      balcony,
      sign,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the property");
  }
});

export default router;
