const { Router } = require("express");
import { v4 as uuidv4 } from "uuid";
import db from "../../models";
const router = Router();

router.get("/", async (req: any, res: any) => {
  try {
    let result = await db.User.findAll({
      include: {
        model: db.UserType,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).send("Users not found");
  }
});

router.get("/:id", async (req: any, res: any) => {
  let { id } = req.params; // modificar a params, lo saco del body para probar
  try {
    let result = await db.User.findByPk(id, {});
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(404).send("Users not found");
  }
});

router.post("/", async (req: any, res: any) => {
  const { name, email } = req.body;
  try {
    let result = await db.User.create({
      id: uuidv4(),
      name: name,
      email: email,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("We could not create the user");
  }
});

//WISHLIST

// MODIFY
router.put("/wishlist", async (req: any, res: any) => {
  let { UserId, wishListId } = req.body;
  try {
    if (!UserId || !wishListId) {
      return res.status(500).json({ message: "Incomplete information" });
    }

    let customer = await db.User.findByPk(UserId, {});

    if (!customer) {
      return res.status(500).json({ message: "User not found" });
    }

    let newWishList = customer.wishList ? [...customer.wishList] : [];
    if (!newWishList.includes(wishListId)) {
      newWishList.push(wishListId);
      let result = await customer.update({ wishList: newWishList });
      return res.status(200).json(result);
    } else {
      return res
        .status(200)
        .json({ message: "Item already exists in the wishlist" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Could not modify the wishlist" });
  }
});

//DELETE
router.delete("/wishlist", async (req: any, res: any) => {
  let { UserId, wishListId } = req.body;
  try {
    if (!UserId || !wishListId) {
      return res.status(500).json({ message: "Incomplete information" });
    }

    let costumer = await db.User.findByPk(UserId, {});

    if (!costumer) {
      return res.status(500).json({ message: "User not found" });
    }

    if (!costumer.wishList.includes(wishListId)) {
      return res.status(500).json({ message: "The item does not exist" });
    }

    let deleteWishList = [...costumer.wishList];
    let newWishList = deleteWishList.filter((w) => w !== wishListId);
    let result = await costumer.update({ wishList: newWishList });
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Could not delete the item of wishlist" });
  }
});

export default router;
