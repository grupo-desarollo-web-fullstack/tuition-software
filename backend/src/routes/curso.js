import express from "express"
import { getDataListFromModel, getDataUniqueFromModel, postDataListFromModel, updateDataUniqueFromModel } from "../services/db.js";

const curso = express.Router();

//Obtiene datos
curso.get('/',async function(req,res){
    const data = await getDataListFromModel("curso");
    res.json({
        data,
        status:200
    })
})

//Obtiene datos por ID
curso.get('/:id',async function(req,res){
    const data = await getDataUniqueFromModel("curso",{
        where:{
            curso_id: +req.params.id
        }
    });
    res.json({
        data,
        status:200
    })
})

//Actualiza datos por ID
curso.put('/:id',async function(req,res){
    const data = await updateDataUniqueFromModel("curso",{
        where:{
            curso_id: +req.params.id
        },
        data:{
            curso_nombre:req.body.nombre,
            curso_creditos:req.body.creditos,
            curso_tipo:+req.body.tipo
        } 
    });
    res.status(201).json({
        data,
        status:201
    })
})

//Envia nuevos datos
curso.post('/',async function(req,res){
    const data = await postDataListFromModel("curso",{
        data:{
            curso_nombre:req.body.nombre,
            curso_creditos:req.body.creditos,
            curso_tipo:req.body.tipo
        } 
    });
    res.status(201).json({
        data,
        status:201
    })
})

export default curso