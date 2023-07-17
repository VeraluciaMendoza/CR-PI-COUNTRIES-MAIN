const { getAllCountries } = require("../controllers/getAllCountries")
const getCountriesById = require("../controllers/getCountriesById");

// Obtener todos los paises y por nombre
const getCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const result = name ? (await getAllCountries(name)) : (await getAllCountries());
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryByIdHandler = async (req, res) => {
  try {
    const { idPais } = req.params;
    const country = await getCountriesById(idPais);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = {
  getCountriesHandler,
  getCountryByIdHandler
}