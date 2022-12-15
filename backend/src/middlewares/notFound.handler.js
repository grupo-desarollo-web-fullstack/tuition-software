import { notFound } from "@hapi/boom";

export default function notFoundHandler(req,res,next) { 
    const notFoundBoom = notFound("Ruta no encontrada")
    console.log("probando")
    res.status(notFoundBoom.output.statusCode).json(
        notFoundBoom.output.payload
    )
}