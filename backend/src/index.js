import express from "express";
import cors from "cors";
import handlerError from "./middlewares/error.handler.js";
import clase from "./routes/clase.routes.js";
import curso from "./routes/curso.routes.js";
import docente from "./routes/docente.routes.js";
import estudiante from "./routes/estudiante.routes.js";
import horario from "./routes/horario.routes.js";
import matricula from "./routes/matricula.routes.js";
import jwtStrategy from "./libs/estrategies/protectJWT.js";
import passport from "passport";
import notFoundHandler from "./middlewares/notFound.handler.js";

const app = express();

//Proteccion estrategia
passport.use(jwtStrategy());

app.use(cors());
app.use(express.json());

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

app.listen(5000, function () {
  console.log("servidor activo en http://localhost:5000");
});
