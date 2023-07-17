const { Router } = require("express");
const countryRouter = require("./countriesRouter");
const activityRouter = require("./activitiesRouter");

const router = Router();
// invocar a los routers
router.use('/countries', countryRouter);
router.use('/activities', activityRouter);

module.exports = router;