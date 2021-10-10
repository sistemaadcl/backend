const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const clientRouter = require('./routes/clients.routes');
const productRouter = require('./routes/products.routes');
const orderRouter = require('./routes/orders.routes');

//Configuración
const app = express();

//Middlewares
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

//Rutas
app.use('/api/v1', productRouter);
app.use('/api/v1', clientRouter);
app.use('/api/v1', orderRouter);

module.exports = app;

