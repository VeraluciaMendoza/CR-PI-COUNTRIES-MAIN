const { Router } = require("express");
const { createActivityHandler, getActivitiesHandler } = require('../handlers/activityHandlers')

const activityRouter = Router();

activityRouter.post('/', createActivityHandler)
activityRouter.get('/', getActivitiesHandler)

module.exports = activityRouter;

