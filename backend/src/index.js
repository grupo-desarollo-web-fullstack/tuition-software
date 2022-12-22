import express from "express";
import cors from "cors";
import i18n from "i18n";
import path from "node:path";
import passport from "passport";
import handlerError from "./middlewares/error.handler.js";
import clase from "./routes/clase.routes.js";
import curso from "./routes/curso.routes.js";
import docente from "./routes/docente.routes.js";
import estudiante from "./routes/estudiante.routes.js";
import horario from "./routes/horario.routes.js";
import matricula from "./routes/matricula.routes.js";
import jwtStrategy from "./libs/estrategies/protectJWT.js";
import notFoundHandler from "./middlewares/notFound.handler.js";
import config from "./config/index.js";

const app = express();

i18n.configure({
  locales: ["es", "en"],
  directory: path.resolve("./src/locales"),
});

//Proteccion estrategia
passport.use(jwtStrategy());

app.use(cors());
app.use(express.json());
app.use(i18n.init);

//rutas
app.use("/estudiante", estudiante);
app.use("/curso", curso);
app.use("/matricula", matricula);
app.use("/docente", docente);
app.use("/horario", horario);
app.use("/clase", clase);

//handlers errors
app.use(handlerError);
app.use(notFoundHandler);

app.listen(config.port, function () {
  console.log(`servidor activo en http://localhost:${config.port}`);
});
