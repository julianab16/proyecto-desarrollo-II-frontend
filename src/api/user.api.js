import API from "./http";

// GET /users/
export const getUsers = () => API.get("/users/");

// GET /users/:id/
export const getUserById = (id) => API.get(`/users/${id}/`);

// PUT /users/:id/
export const updateUser = (id, data) =>
  API.put(`/users/${id}/`, data);

// DELETE /users/:id/
export const deleteUser = (id) =>
  API.delete(`/users/${id}/`);

