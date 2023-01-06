import {
  getDataListFromModel,
  getDataUniqueFromModel,
  postDataListFromModel,
  updateDataUniqueFromModel,
} from "../libs/db.js";
const claseServices = {
  async getAll(options) {
    const data = await getDataListFromModel("clase", options);
    return data;
  },

  async getUnique(id) {
    const data = await getDataUniqueFromModel("clase", {
      where: {
        clase_id: +id,
      },
    });
    return data;
  },

  async updateUnique(
    id,
    nsalon,
    horario_id,
    curso_id,
    clase_aforo,
    disponibilidad
  ) {
    const data = await updateDataUniqueFromModel("clase", {
      where: {
        clase_id: +id,
      },
      data: {
        clase_nsalon: nsalon,
        tbl_horario_horario_id: +horario_id,
        tbl_curso_curso_id: +curso_id,
        clase_aforo: +clase_aforo,
        clase_disponibilidad: !!disponibilidad,
      },
    });
    return data;
  },

  async create(nsalon, horario_id, curso_id, aforo) {
    const data = await postDataListFromModel("clase", {
      data: {
        clase_nsalon: nsalon,
        tbl_horario_horario_id: +horario_id,
        tbl_curso_curso_id: +curso_id,
        clase_aforo: +aforo,
      },
    });
    return data;
  },
};

export default claseServices;
