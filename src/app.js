const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

//Configuración
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

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

module.exports = app;

