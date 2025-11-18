import API from "./http";

// GET /auth/me/
export const getMe = () => API.get("/auth/me/");

// PUT /auth/me/
export const updateMe = (data) => API.put("/auth/me/", data);

// DELETE /auth/me/
export const deleteMyAccount = () => API.delete("/auth/me/");
