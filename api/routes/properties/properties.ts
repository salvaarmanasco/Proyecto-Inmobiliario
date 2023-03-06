const { Router } = require("express");
import { v4 as uuidv4 } from "uuid";
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.Property.findAll({
      include: [
        {
          model: db.Country,
        },
        {
          model: db.Condition,
        },
        {
          model: db.Price,
        },
        {
          model: db.Garden,
        },
        {
          model: db.Services,
        },
        {
          model: db.State,
        },
        {
          model: db.Zone,
        },
        {
          model: db.Category,
        },
        {
          model: db.Image,
        },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Property not found");
  }
});

router.get("/:id", async (req: any, res: any) => {
  let { id } = req.params;
  try {
    let result = await db.Property.findByPk(id, {
      include: [
        {
          model: db.Country,
        },
        {
          model: db.Condition,
        },
        {
          model: db.Price,
        },
        {
          model: db.Garden,
        },
        {
          model: db.Services,
        },
        {
          model: db.State,
        },
        {
          model: db.Zone,
        },
        {
          model: db.Category,
        },
        {
          model: db.Image,
        },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Property not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const {
    title,
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
    deleted,
    lat,
    long,
  } = req.body;
  try {
    let result = await db.Property.create({
      id: uuidv4(),
      antiquity,
      title,
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
      deleted,
      lat,
      long,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the property");
  }
});

export default router;
