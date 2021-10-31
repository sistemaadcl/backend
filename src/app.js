import express from "express";
import morgan from "morgan";
import cors from "cors";
import clientRouter from './routes/clients.routes.js';
import productRouter from './routes/products.routes.js';
import orderRouter from './routes/orders.routes.js';
import usersRouter from './routes/users.routes.js';

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
app.use('/api/v1', usersRouter);

export default app;

