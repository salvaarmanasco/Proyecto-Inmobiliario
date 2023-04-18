import userRouter from "./user/users";
import propertiesRouter from "./properties/properties";
import conditionRouter from "./condition/condition";
import countryRouter from "./country/country";
import stateRouter from "./state/state";
import servicesRouter from "./services/services";
import categoryRouter from "./category/category";
import gardenRouter from "./garden/garden";
import imageRouter from "./image/image";
import wishListRouter from "./wishlist/wishlist";

import propertyConditionRouter from "./propertyCondition/propertyCondition";
import propertyCountryRouter from "./propertyCountry/propertyCountry";
import propertyStateRouter from "./propertyState/propertyState";
import propertyCategoryRouter from "./propertyCategory/propertyCategory";
import propertyGardenRouter from "./propertyGarden/propertyGarden";
import propertyServicesRouter from "./propertyServices/propertyServices";
import propertyImage from "./propertyImage/propertyImage";
import propertyUserRouter from "./propertyUser/propertyUser";

const { Router } = require("express");
const router = Router();

router.use("/users", userRouter);
router.use("/garden", gardenRouter);
router.use("/services", servicesRouter);
router.use("/properties", propertiesRouter);
router.use("/condition", conditionRouter);
router.use("/country", countryRouter);
router.use("/state", stateRouter);
router.use("/category", categoryRouter);
router.use("/image", imageRouter);
router.use("/wishlist", wishListRouter);

router.use("/propertycondition", propertyConditionRouter);
router.use("/propertycountry", propertyCountryRouter);
router.use("/propertystate", propertyStateRouter);
router.use("/propertycategory", propertyCategoryRouter);
router.use("/propertygarden", propertyGardenRouter);
router.use("/propertyservices", propertyServicesRouter);
router.use("/propertyimage", propertyImage);
router.use("/propertyuser", propertyUserRouter);

export default router;
