const { Router } = require("express");
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.Image.findAll({
      include: {
        model: db.Property,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Image not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { image_url, image_description, deleted } = req.body;
  try {
    let result = await db.Image.create({
      image_url,
      image_description,
      deleted,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the image");
  }
});

// router.delete("/", async (req: any, res: any) => {
//   const { id } = req.body;
//   try {
//     let result = await db.Image.destroy({
//       where: { id },
//     });
//     return res.status(200).json(result);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("We could not delete the image");
//   }
// });

router.delete("/", async (req: any, res: any) => {
  const { id } = req.query;
  try {
    await db.Image.destroy({
      where: {
        id,
      },
    });
    return res.status(200).send("The image has been successfully deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not delete the image");
  }
});

export default router;
