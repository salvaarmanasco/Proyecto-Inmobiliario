import userRouter from "./user/users";
import userTypesRouter from "./userTypes/userTypes";
const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/usertype", userTypesRouter);

export default router;
