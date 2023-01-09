import {
  deleteUniqueFromModel,
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../libs/db.js";

const docenteServices = {
  async getAll() {
    const data = await getDataListFromModel("docente");
    return data;
  },

  async getUnique(id) {
    const data = await getDataUniqueFromModel("docente", {
      where: {
        docente_id: +id,
      },
    });
    return data;
  },

  async updateUnique(id, nombre, edad) {
    const data = await updateDataUniqueFromModel("docente", {
      where: {
        docente_id: +id,
      },
      data: {
        docente_nombre: nombre,
        docente_edad: +edad,
      },
    });
    return data;
  },

  async create(nombre, edad) {
    const data = await postDataListFromModel("docente", {
      data: {
        docente_nombre: nombre,
        docente_edad: +edad,
      },
    });
    return data;
  },
  async delete(id) {
    const data = await deleteUniqueFromModel("docente", {
      where: {
        docente_id: +id,
      },
    });
    return data;
  },
};

export default docenteServices;
