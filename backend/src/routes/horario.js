import express from "express"
import { getDataListFromModel, getDataUniqueFromModel, postDataListFromModel, updateDataUniqueFromModel } from "../services/db.js";

const horario = express.Router();

//Obtiene datos
horario.get('/',async function(req,res){
    const data = await getDataListFromModel("horario");
    res.json({
        data,
        status:200
    })
})

//Obtiene datos por ID
horario.get('/:id',async function(req,res){
    const data = await getDataUniqueFromModel("horario",{
        where:{
            horario_id: +req.params.id
        }
    });
    res.json({
        data,
        status:200
    })
})

//Actualiza datos por ID -----------
horario.put('/:id',async function(req,res){
    const data = await updateDataUniqueFromModel("horario",{
        where:{
            horario_id: +req.params.id
        },
        data:{
            horario_fecha: new Date(req.body.horario_fecha),
            horario_disponibilidad: !!req.body.disponibilidad,
            horario_aforo: +req.body.aforo,
            tbl_docente_docente_id: +req.body.docente_id
        } 
    });
    res.status(201).json({
        data,
        status:201
    })
})

//Envia nuevos datos
horario.post('/',async function(req,res){
    const data = await postDataListFromModel("horario",{
        data:{
            horario_fecha: new Date(req.body.horario_fecha),
            horario_disponibilidad: !!req.body.disponibilidad,
            horario_aforo: +req.body.aforo,
            tbl_docente_docente_id: +req.body.docente_id
        } 
    });
    res.status(201).json({
        data,
        status:201
    })
})

export default horario