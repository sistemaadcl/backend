const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

//Configuración
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

