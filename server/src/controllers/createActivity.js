const { Activity, Country } = require('../db');

const createActivity = async (name, difficulty, duration, season, countries) => {
  // Valido los datos enviados para crear la actividad nueva
  if (!name || !difficulty || !duration || !season || countries.length === 0) throw Error('Faltan datos');

  // Obtengo la instancia de Country
  // const country = await Country.findByPk(idCountry);
  // if (!country) throw Error('El ID del Pais es incorrecto')

  // Creo la nueva actividad
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season
  }); 

  // Asocio los modelos
  await newActivity.addCountry(countries);
  return newActivity;
}

module.exports = createActivity;