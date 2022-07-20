import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import booksRouter from "./routes/books.routes.js";

//Inicialization
const app = express();


//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use(booksRouter);

//Server
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

