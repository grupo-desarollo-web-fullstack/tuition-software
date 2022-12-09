import express from "express"
import estudiante from "./routes/estudiante.js";

const app = express();

app.use(express.json());

app.use("/estudiante",estudiante)

app.listen(5000,function(){
    console.log("servidor activo en http://localhost:5000")
})