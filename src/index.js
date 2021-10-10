const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');

const port = process.env.PORT || 4000;

function main() {
  //Conexion con servidor
  const server = app.listen(port, () => {
    console.log("Server listening in port", port);
  });
}

main();
