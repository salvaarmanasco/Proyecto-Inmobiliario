import userRouter from "./user/users";
import userTypesRouter from "./userTypes/userTypes";
import propertiesRouter from "./properties/properties";
import conditionRouter from "./condition/condition";
import countryRouter from "./country/country";
import priceRouter from "./price/price";
import stateRouter from "./state/state";
import propertyConditionRouter from "./propertyCondition/propertyCondition";
import propertyCountryRouter from "./propertyCountry/propertyCountry";
import propertyPriceRouter from "./propertyPrice/propertyPrice";
import propertyStateRouter from "./propertyState/propertyState";

const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/usertype", userTypesRouter);
router.use("/properties", propertiesRouter);
router.use("/condition", conditionRouter);
router.use("/country", countryRouter);
router.use("/price", priceRouter);
router.use("/state", stateRouter);
router.use("/propertycondition", propertyConditionRouter);
router.use("/propertycountry", propertyCountryRouter);
router.use("/propertyprice", propertyPriceRouter);
router.use("/propertystate", propertyStateRouter);

export default router;
