const createActivity = require("../controllers/createActivity");
const getActivities = require("../controllers/getActivities");

const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body
  try {
    const newActivity = await createActivity(name, difficulty, duration, season, countries);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getActivitiesHandler = async (req, res) => {
  try {
    const getAllActivities = await getActivities();
    res.status(200).send(getAllActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createActivityHandler,
  getActivitiesHandler
}