import express from "express"
import { getDataListFromModel, getDataUniqueFromModel, postDataListFromModel, updateDataUniqueFromModel } from "../services/db.js";
import passport  from "passport";
import {Strategy,ExtractJwt} from "passport-jwt"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';

const estudiante = express.Router();
const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"secret"
}

passport.use(new Strategy(options,async function(jwtPayload,done){
    const data = await getDataListFromModel("estudiante",{
        where:{
            estudiante_id: jwtPayload.id
        }
    });
    delete data.estudiante_password
    console.log(data)
    return done(null,data)
}))

estudiante.post('/login',passport.authenticate("jwt",{session:false}), async function(req,res){
    const data = Object.assign(req.user)
    delete data.estudiante_password
    console.log(data)
    res.status(201).json({
        data,
        status:201
    })
})

estudiante.get('/',async function(req,res){
    const data = await getDataListFromModel("estudiante");
    res.json({
        data,
        status:200
    })
})

estudiante.get('/:id',async function(req,res){
    const data = await getDataUniqueFromModel("estudiante",{
        where:{
            estudiante_id: +req.params.id
        }
    });
    res.json({
        data,
        status:200
    })
})

estudiante.put('/:id',async function(req,res){
    const data = await updateDataUniqueFromModel("estudiante",{
        where:{
            estudiante_id: +req.params.id
        },
        data:{
            estudiante_nombre:req.body.nombre,
            estudiante_carrera:req.body.carrera,
            estudiante_ciclo:+req.body.ciclo
        } 
    });
    res.status(201).json({
        data,
        status:201
    })
})

estudiante.post('/',async function(req,res){
    const passwordHash = await bcrypt.hash(req.body.password,10)
    const data = await postDataListFromModel("estudiante",{
        data:{
            estudiante_nombre:req.body.nombre,
            estudiante_carrera:req.body.carrera,
            estudiante_ciclo:+req.body.ciclo,
            estudiante_password:passwordHash
        }
    });

    const token = jwt.sign({
        id:data.estudiante_id,
        nombre:data.estudiante_nombre
    },options.secretOrKey)
    data.token = token
    delete data.estudiante_password
    res.status(201).json({
        data,
        status:201
    })
})

export default estudiante


