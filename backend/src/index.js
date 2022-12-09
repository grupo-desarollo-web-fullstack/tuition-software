import express from "express";
import handlerError from "./middlewares/handlerError.js";
import clase from "./routes/clase.js";
import curso from "./routes/curso.js";
import docente from "./routes/docente.js";
import estudiante from "./routes/estudiante.js";
import horario from "./routes/horario.js";
import matricula from "./routes/matricula.js";

const app = express();

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

app.listen(5000, function () {
  console.log("servidor activo en http://localhost:5000");
});
