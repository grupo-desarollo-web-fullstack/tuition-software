import { getDataListFromModel, getDataUniqueFromModel, postDataListFromModel, updateDataUniqueFromModel } from "../libs/db.js";
const claseServices = {
  async getAll() {
    const data = await getDataListFromModel("clase");
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

  async updateUnique(id, nsalon, horario_id) {
    const data = await updateDataUniqueFromModel("clase", {
      where: {
        clase_id: +id,
      },
      data: {
        clase_nsalon: nsalon,
        tbl_horario_horario_id: +horario_id,
      },
    });
    return data;
  },

  async create(nsalon,horario_id) {
    const data = await postDataListFromModel("clase", {
      data: {
        clase_nsalon: nsalon,
        tbl_horario_horario_id: +horario_id,
      },
    });
    return data;
  },
  
};

export default claseServices;
