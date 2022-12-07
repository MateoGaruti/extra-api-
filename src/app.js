const express = require("express");
const server = express();
require("dotenv").config()
const port = process.env.PORT || 3000
const morgan = require("morgan");
const bodyParser = require("body-parser");


server.use(morgan("dev"));
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: false }));

const cancionesRouter = require("./routers/canciones.router");
const generosRouter = require("./routers/generos.router");


server.use("/api/v1/musicando/canciones", cancionesRouter)
server.use("/api/v1/musicando/generos", generosRouter)


server.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
})