import { config } from 'dotenv';

config();
import app from './app.js';
import connection from './settings/db.js';

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
