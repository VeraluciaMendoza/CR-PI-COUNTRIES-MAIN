const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getApiCountry } = require("./src/controllers/loadApi");
const PORT = 3001;

conn.sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    // Cargar DB con info formateada
    getApiCountry();
  })
  .catch(error => console.error(error))
 