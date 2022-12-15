import jwt from "jsonwebtoken";
import { getDataListFromModel, getDataUniqueFromModel, postDataListFromModel, updateDataUniqueFromModel } from "../libs/db.js";
import bcrypt from "bcrypt";

const estudianteServices = {
   login(data, options) {
    const token = jwt.sign(
      {
        id: data.estudiante_id,
      },
      options.secretOrKey
    );
    data.token = token;
    delete data.estudiante_password;
    return data;
  },
  async create({ nombre,carrera,ciclo,password,email },options) {
    const passwordHash = await bcrypt.hash(password, 10);
    const data = await postDataListFromModel("estudiante", {
      data: {
        estudiante_nombre: nombre,
        estudiante_carrera: carrera,
        estudiante_ciclo: +ciclo,
        estudiante_password: passwordHash,
        estudiante_email: email,
      },
    });

    const token = jwt.sign(
      {
        id: data.estudiante_id,
      },
      options.secretOrKey
    );
    data.token = token;
    delete data.estudiante_password;
    return data;
  },
  async getAll() { 
    const data = await getDataListFromModel("estudiante");
    return data;
  },

  async getUnique(id) { 
    const data = await getDataUniqueFromModel("estudiante", {
      where: {
        estudiante_id: +id,
      },
      
    });
    return data;
  },
  async updateUnique(id,nombre,carrera,ciclo) { 
    const data = await updateDataUniqueFromModel("estudiante", {
      where: {
        estudiante_id: +id,
      },
      data: {
        estudiante_nombre: nombre,
        estudiante_carrera: carrera,
        estudiante_ciclo: +ciclo,
      },
    });
    return data;
  }
};

export default estudianteServices;
