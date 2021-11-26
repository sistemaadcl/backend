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

  if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './public/dist/index.html'))
    })
  }
}

main();
