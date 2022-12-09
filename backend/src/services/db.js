import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getDataListFromModel(modelName, options = {}) {
  const model = prisma[modelName];
  const data = await model.findMany(options);

  return data;
}

export async function getDataUniqueFromModel(modelName, options) {
  const model = prisma[modelName];
  const data = await model.findUnique(options);

  return data;
}

export async function updateDataUniqueFromModel(modelName, options) {
  const model = prisma[modelName];
  const data = await model.update(options);

  return data;
}

export async function postDataListFromModel(modelName, options) {
  const model = prisma[modelName];
  const data = await model.create(options);

  return data;
}
