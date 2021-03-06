import api from "./api-config";
export const getItems = async () => {
  try {
    const res = await api.get("/items");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getItem = async (id) => {
  try {
    let res = await api.get(`/items/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const postItem = async (itemData) => {
  try {
    let res = await api.post("/items", itemData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updatedItem = async (id, itemData) => {
  try {
    let res = await api.put(`/items/${id}`, itemData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    let res = await api.delete(`/items/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
