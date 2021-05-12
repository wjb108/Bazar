import api from "./api-config";

export const getUsers = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    let res = await api.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    let res = await api.post("/users", userData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updatedUser = async (id, userData) => {
  try {
    let res = await api.put(`/users/${id}`, userData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    let res = await api.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (credentials) => {
  try {
    const resp = await api.post("/api/v1/auth", credentials);
    localStorage.setItem("token", resp.data.token);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (credentials) => {
  try {
    const resp = await api.post("/api/v1/auth", credentials);
    localStorage.setItem("token", resp.data.token);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const res = await api.get("/api/v1/auth");
    return res.data;
  } else {
    return false;
  }
};
