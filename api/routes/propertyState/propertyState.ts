const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyState.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-State relationship not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, StateId } = req.body;
  try {
    let result = await db.PropertyState.create({
      PropertyId,
      StateId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-State relationship");
  }
});

router.put("/", async (req: any, res: any) => {
  const { PropertyId, StateId } = req.body;
  try {
    await db.PropertyState.update({ StateId }, { where: { PropertyId } });
    return res
      .status(200)
      .send("the property state has been successfully modified");
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not modify the Property-State relationship");
  }
});

export default router;
