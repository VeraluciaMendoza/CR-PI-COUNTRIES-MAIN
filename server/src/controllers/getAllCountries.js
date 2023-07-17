const { Country, Activity } = require('../db');

// Obtener todos los paises del DB
const getCountriesDb = async () => {
  const allCountries = await Country.findAll({
    include: {
      model: Activity,
      through: { attibutes: ['ActivityId']}
    }
  });
  return allCountries;
}

// Buscar todos los paises del DB y por nombre
const getAllCountries = async (name) => {
  const allCountries = await getCountriesDb();

  if (name) {
    const filterCountries = allCountries.filter((country) => 
      country.name.toLowerCase().includes(name.toLowerCase())
    );

    if (filterCountries.length === 0) throw Error('No se encontro el pais con ese nombre');
    return filterCountries;
  } 
  
  return allCountries;
}

module.exports = {
  getCountriesDb,
  getAllCountries
}