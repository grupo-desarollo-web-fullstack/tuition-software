import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../libs/db.js";

const matriculaServices = {
  async getAll() {
    const data = await getDataListFromModel("matricula");
    return data;
  },

  async getUnique(id) {
    const data = await getDataUniqueFromModel("matricula", {
      where: {
        matricula_id: +id,
      },
    });
    return data;
  },

  async updateUnique(id, estudiante_id, curso_id, clase_id) {
    const data = await updateDataUniqueFromModel("matricula", {
      where: {
        matricula_id: +id,
      },
      data: {
        tbl_estudiante_estudiante_id: +estudiante_id,
        tbl_curso_curso_id: +curso_id,
        tbl_clase_clase_id: +clase_id,
      },
    });
    return data;
  },

  async create(estudiante_id, curso_id, clase_id) {
    const data = await postDataListFromModel("matricula", {
      data: {
        tbl_estudiante_estudiante_id: +estudiante_id,
        tbl_curso_curso_id: +curso_id,
        tbl_clase_clase_id: +clase_id,
      },
    });
    return data;
  },
};

export default matriculaServices;
