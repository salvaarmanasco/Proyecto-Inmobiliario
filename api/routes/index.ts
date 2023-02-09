import userRouter from "./user/users";
import userTypesRouter from "./userTypes/userTypes";
import propertiesRouter from "./properties/properties";
import conditionRouter from "./condition/condition";
import propertyConditionRouter from "./propertyCondition/propertyCondition";
const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/usertype", userTypesRouter);
router.use("/properties", propertiesRouter);
router.use("/condition", conditionRouter);
router.use("/propertycondition", propertyConditionRouter);

export default router;
