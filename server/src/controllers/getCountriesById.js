const { Country, Activity } = require('../db');

const getCountriesById = async (id) => {
  if(isNaN(id)) {
    const idFormat = id.toUpperCase();
    // const country = await Country.findByPk(idFormat);
    const country = await Country.findOne({
      where: {
        id: idFormat
      },
      include: Activity
    });
    if (country) return country
    else throw Error("El ID ingresado no existe")
  }
};

module.exports = getCountriesById;