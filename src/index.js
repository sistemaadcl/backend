const app = require('./app');

function main() {
  //Conexion con servidor
  const server = app.listen(port, () => {
    console.log("Server listening in port", port);
  });
}

main();
