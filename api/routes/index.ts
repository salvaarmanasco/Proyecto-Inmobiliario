import userRouter from "./user/users";
import userTypesRouter from "./userTypes/userTypes";
import propertiesRouter from "./properties/properties";
import conditionRouter from "./condition/condition";
import countryRouter from "./country/country";
import stateRouter from "./state/state";
import servicesRouter from "./services/services";
import categoryRouter from "./category/category";
import gardenRouter from "./garden/garden";
import imageRouter from "./image/image";

import propertyConditionRouter from "./propertyCondition/propertyCondition";
import propertyCountryRouter from "./propertyCountry/propertyCountry";
import propertyStateRouter from "./propertyState/propertyState";
import propertyCategoryRouter from "./propertyCategory/propertyCategory";
import propertyGardenRouter from "./propertyGarden/propertyGarden";
import propertyServicesRouter from "./propertyServices/propertyServices";
import propertyImage from "./propertyImage/propertyImage";

const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/garden", gardenRouter);
router.use("/services", servicesRouter);
router.use("/usertype", userTypesRouter);
router.use("/properties", propertiesRouter);
router.use("/condition", conditionRouter);
router.use("/country", countryRouter);
router.use("/state", stateRouter);
router.use("/category", categoryRouter);
router.use("/image", imageRouter);

router.use("/propertycondition", propertyConditionRouter);
router.use("/propertycountry", propertyCountryRouter);
router.use("/propertystate", propertyStateRouter);
router.use("/propertycategory", propertyCategoryRouter);
router.use("/propertygarden", propertyGardenRouter);
router.use("/propertyservices", propertyServicesRouter);
router.use("/propertyimage", propertyImage);

export default router;
