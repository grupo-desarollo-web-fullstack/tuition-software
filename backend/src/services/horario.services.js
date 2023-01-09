import {
  deleteUniqueFromModel,
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../libs/db.js";

const horarioServices = {
  async getAll() {
    const data = await getDataListFromModel("horario");
    return data;
  },

  async getUnique(id) {
    const data = await getDataUniqueFromModel("horario", {
      where: {
        horario_id: +id,
      },
    });
    return data;
  },

  async updateUnique(id, hora_inicio, hora_final, dias, horario, docente_id) {
    const data = await updateDataUniqueFromModel("horario", {
      where: {
        horario_id: +id,
      },
      data: {
        hora_inicio: new Date(hora_inicio),
        hora_final: new Date(hora_final),
        horario_dias: dias,
        horario_hora: horario,
        tbl_docente_docente_id: +docente_id,
      },
    });
    return data;
  },

  async create(hora_inicio, hora_final, dias, horario, docente_id) {
    const data = await postDataListFromModel("horario", {
      data: {
        horario_hora_inicio: new Date(hora_inicio),
        horario_hora_final: new Date(hora_final),
        horario_dias: dias,
        horario_hora: new Date(horario),
        tbl_docente_docente_id: +docente_id,
      },
    });
    return data;
  },
  async delete(id) {
    const data = await deleteUniqueFromModel("horario", {
      where: {
        horario_id: +id,
      },
    });
    return data;
  },
};

export default horarioServices;
