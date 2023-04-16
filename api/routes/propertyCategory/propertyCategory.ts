const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyCategory.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-Category relationship not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, CategoryId } = req.body;
  try {
    let result = await db.PropertyCategory.create({
      PropertyId,
      CategoryId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-Category relationship");
  }
});

router.put("/", async (req: any, res: any) => {
  const { PropertyId, CategoryId } = req.body;
  try {
    await db.PropertyCategory.update({ CategoryId }, { where: { PropertyId } });
    return res
      .status(200)
      .send("the property category has been successfully modified");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not modify the Property-Category relationship");
  }
});

export default router;
