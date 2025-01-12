const { query } = require("express");
const { API_CALLS } = require("../constant.js");
const { prisma } = require("../prismaClient.js");

const create = async (table_name, data) => {
  try {
    const response = await prisma[table_name].create({
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
const createMany = async (table_name, data) => {
  try {
    const response = await prisma[table_name].createMany({
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const findUnique = async (table_name, data) => {
  try {
    const response = await prisma[table_name].findUnique({
      query,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const update = async (table_name, query) => {
  try {
    const response = await prisma[table_name].update({
      query,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
const updateMany = async (table_name, query) => {
  try {
    const response = await prisma[table_name].update({
      query,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const findMany = async (table_name, query) => {
  try {
    const response = await prisma[table_name].findMany({
      query,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const DB = async (call_type, table_name, query) => {
  let response;
  try {
    switch (call_type) {
      case API_CALLS.CREATE:
        response = await create(table_name, query);
        break;
      case API_CALLS.CREATE_MANY:
        response = await createMany(table_name, query);
        break;
      case API_CALLS.UPDATE:
        response = await update(table_name, query);
        break;
      case API_CALLS.UPDATE_MANY:
        response = await updateMany(table_name, query);
        break;
      case API_CALLS.FIND_MANY:
        response = await findMany(table_name, query);
        break;
      case API_CALLS.FIND_UNIQUE:
        response = await findUnique(table_name, query);

      default:
        response = {};
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  DB,
};
