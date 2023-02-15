const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.PropertyServices.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Property-Services relationship not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { PropertyId, ServiceId } = req.body;
  try {
    let result = await db.PropertyServices.create({
      PropertyId,
      ServiceId,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("We could not create the Property-Services relationship");
  }
});

export default router;
