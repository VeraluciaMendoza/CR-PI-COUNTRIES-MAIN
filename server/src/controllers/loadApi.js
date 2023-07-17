const { Country } = require('../db');
const axios = require('axios');

// Controller para traer todos los paises de la API y guardar en DB
const getApiCountry = async () => {
  const responseApi = (await axios.get("http://localhost:5000/countries")).data;
  // Formatear la info que necesitaremos
  const mapResApi = responseApi.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      imageFlag: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "No hay capital",
      subregion: country.subregion ? country.subregion : "No hay subregion",
      area: country.area,
      population: country.population
    }
  });
  // Registrar a DB todos los paises
  const allCountries = await Country.bulkCreate(mapResApi);
  return allCountries;
}

module.exports = {
  getApiCountry
}
