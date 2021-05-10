import api from "./api-config";

export const getCategories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCategory = async (id) => {
  try {
    let res = await api.get(`/categories/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    let res = await api.post("/categories", categoryData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updatedCategory = async (id, categoryData) => {
  try {
    let res = await api.put(`/categories/${id}`, categoryData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    let res = await api.delete(`/categories/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
