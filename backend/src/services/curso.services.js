import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../libs/db.js";

const cursoServices = {
  async getAll() {
    const data = await getDataListFromModel("curso");
    return data;
  },

  async getUnique(id) {
    const data = await getDataUniqueFromModel("curso", {
      where: {
        curso_id: +id,
      },
    });
    return data;
  },

  async updateUnique(id, nombre, creditos, tipo, ciclo, id_clase) {
    const data = await updateDataUniqueFromModel("curso", {
      where: {
        curso_id: +id,
      },
      data: {
        curso_nombre: nombre,
        curso_creditos: +creditos,
        curso_tipo: tipo,
        curso_ciclo: +ciclo,
        id_clase: +id_clase,
      },
    });
    return data;
  },

  async create(nombre, creditos, tipo, ciclo, id_clase) {
    const data = await postDataListFromModel("curso", {
      data: {
        curso_nombre: nombre,
        curso_creditos: +creditos,
        curso_tipo: tipo,
        curso_ciclo: +ciclo,
        id_clase: +id_clase,
      },
    });
    return data;
  },
};

export default cursoServices;
