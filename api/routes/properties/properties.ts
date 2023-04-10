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
          model: db.Garden,
        },
        {
          model: db.Services,
        },
        {
          model: db.State,
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
          model: db.Garden,
        },
        {
          model: db.Services,
        },
        {
          model: db.State,
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
    price,
    zone,
    firstImage,
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
      price,
      zone,
      firstImage,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the property");
  }
});

router.put("/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const {
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
    price,
    zone,
    firstImage,
  } = req.body;
  try {
    let result = await db.Property.findByPk(id);
    await result.update({
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
      price,
      zone,
      firstImage,
    });
    res.status(201).send("Property modify");
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.delete("/:id", async (req: any, res: any) => {
  let { id } = req.params;
  try {
    let result = await db.Property.findByPk(id);
    if (result.deleted === true) {
      throw new Error("Property not found");
    } else {
      await result.update(
        {
          deleted: true,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(201).send("Property deleted succesfully");
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send("property not found");
  }
});

export default router;
