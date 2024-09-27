import { API } from "./mainService.js";

export function register(credentials) {
  return new Promise((response, reject) => {
    API.post("/api/user/register/", credentials)
      .then((res) => {
        response(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function login(credentials) {
  return new Promise((response, reject) => {
    API.post("/api/user/login/", credentials)
      .then((res) => {
        response(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
