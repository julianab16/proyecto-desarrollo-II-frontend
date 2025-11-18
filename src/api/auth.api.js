import API from "./http";

// POST /auth/login/
export const loginRequest = (credentials) =>
  API.post("/auth/login/", credentials);

// POST /auth/register/
export const registerRequest = (data) =>
  API.post("/auth/register/", data, {
    headers: {
      "Content-Type": "application/json"
    }
  });

// POST /auth/token/refresh/
export const refreshTokenRequest = (refreshToken) =>
  API.post("/auth/token/refresh/", {
    refresh: refreshToken
  });
