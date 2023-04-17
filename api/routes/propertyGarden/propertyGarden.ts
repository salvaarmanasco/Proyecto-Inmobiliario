const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyGarden.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-Garden relationship not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, GardenId } = req.body;
  try {
    let result = await db.PropertyGarden.create({
      PropertyId,
      GardenId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-Country relationship");
  }
});

router.put("/", async (req: any, res: any) => {
  const { PropertyId, GardenId } = req.body;
  try {
    await db.PropertyGarden.update({ GardenId }, { where: { PropertyId } });
    return res
      .status(200)
      .send("the property garden has been successfully modified");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not modify the Property-Garden relationship");
  }
});

export default router;
