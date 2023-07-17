const { Router } = require("express");
const { getCountriesHandler, getCountryByIdHandler} = require('../handlers/contryHandlers');

const countryRouter = Router();

countryRouter.get('/', getCountriesHandler)
countryRouter.get('/:idPais', getCountryByIdHandler)

module.exports = countryRouter;
