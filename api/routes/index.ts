import userRouter from "./user/users";
import userTypesRouter from "./userTypes/userTypes";
import propertiesRouter from "./properties/properties";
import conditionRouter from "./condition/condition";
import propertyConditionRouter from "./propertyCondition/propertyCondition";
import countryRouter from "./country/country";
import propertyCountryRouter from "./propertyCountry/propertyCountry" 

const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/usertype", userTypesRouter);
router.use("/properties", propertiesRouter);
router.use("/condition", conditionRouter);
router.use("/country", countryRouter);
router.use("/propertycondition", propertyConditionRouter);
router.use("/propertycountry", propertyCountryRouter);

export default router;
