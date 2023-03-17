const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyImage.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-Image relationship not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, ImageId } = req.body;
  try {
    let result = await db.PropertyImage.create({
      PropertyId,
      ImageId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-Image relationship");
  }
});

export default router;
