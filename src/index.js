const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');
const connection = require('./settings/db')

const port = process.env.PORT || 4000;

function main() {
  //Conexion con servidor
  const server = app.listen(port, async () => {
    await connection;
    console.log("Server listening in port", port);
    console.log('Database is connected');
  });
}

main();
