const { Router } = require("express");
import { v4 as uuidv4 } from "uuid";
import db from "../../models";
const router = Router();

router.get("/email", async (req: any, res: any) => {
  let { email } = req.query; // modificar a params, lo saco del body para probar
  try {
    let result = await db.User.findOne({ where: { email: email } });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(404).send("Users not found");
  }
});

router.get("/:id", async (req: any, res: any) => {
  let { id } = req.params; // modificar a params, lo saco del body para probar
  try {
    let result = await db.User.findByPk(id);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(404).send(`Users with id ${id} not found`);
  }
});

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.User.findAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Users not found");
  }
});
router.post("/", async (req: any, res: any) => {
  const { name, lastname, email, phone, photo } = req.body;
  try {
    let result = await db.User.create({
      id: uuidv4(),
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      photo: photo,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the user");
  }
});
router.put("/:id", async (req: any, res: any) => {
  const { id } = req.params;
  const { name, lastname, phone, photo, userType } = req.body;
  try {
    let result = await db.User.findByPk(id);
    await result.update({
      name,
      lastname,
      phone,
      photo,
      userType,
    });
    res.status(200).send("User modify");
  } catch (error) {
    console.log(error);
    res.status(404).send("User not found");
  }
});
router.delete("/:id", async (req: any, res: any) => {
  let { id } = req.params;

  try {
    let result = await db.User.findByPk(id);
    if (result.deleted === true) {
      throw new Error("User not found");
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
      res.status(201).send("User deleted succesfully");
    }
  } catch (error) {
    return res.status(404).send("User not found");
  }
});

export default router;
