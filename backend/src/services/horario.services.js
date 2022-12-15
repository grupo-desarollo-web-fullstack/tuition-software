import { getDataListFromModel, getDataUniqueFromModel, postDataListFromModel, updateDataUniqueFromModel } from "../libs/db.js";
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

  async updateUnique(id, horario_fecha, disponibilidad, aforo, docente_id) {
    const data = await updateDataUniqueFromModel("horario", {
      where: {
        horario_id: +id,
      },
      data: {
        horario_fecha: new Date(horario_fecha),
        horario_disponibilidad: !!disponibilidad,
        horario_aforo: +aforo,
        tbl_docente_docente_id: +docente_id,
      },
    });
    return data;
  },

  async create(horario_fecha,disponibilidad,aforo,docente_id) {
    const data = await postDataListFromModel("horario", {
      data: {
        horario_fecha: new Date(horario_fecha),
        horario_disponibilidad: !!disponibilidad,
        horario_aforo: +aforo,
        tbl_docente_docente_id: +docente_id,
      },
    });
      return data;
  },
};

export default horarioServices;
