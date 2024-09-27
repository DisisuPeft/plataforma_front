import { defineStore } from "pinia";
import { login, register } from "../services/authService.js";
import { errorMsg, success } from "../sweetAlerts/alert.js";
import { router } from "../routes/index.js";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: null,
      token: null,
      message: null,
      isLoading: false,
      estado: null,
    };
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    get_user(state) {
      return state.user;
    },
    get_estado(state) {
      return state.estado;
    },
  },
  actions: {
    get_login(credentials) {
      this.isLoading = true;
      this.message = null;
      this.estado = null;
      login(credentials)
        .then((res) => {
          this.token = res.data.token;
          this.user = res.data.user;
          this.message = null;
          localStorage.setItem("token", this.token);
          localStorage.setItem("user", JSON.stringify(this.user));
          success("¡Exito!", "Redirigiendo...");
          router.push({ path: "/dashboard" });
          this.estado = res.status;
        })
        .catch((error) => {
          //   console.log(error);
          this.message = this.formatErrors(error.response?.data);
          errorMsg("¡Error!", `${this.message}`);
          this.estado = error.status;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    get_register(credentials) {
      this.loading = true;
      this.message = null;
      register(credentials)
        .then((res) => {
          //   console.log(res.data);
          this.message = res.data.message;
          success("¡Exito!", `${this.message}`);
          this.estado = res.status;
        })
        .catch((error) => {
          this.message = this.formatErrors(error.response?.data);
          errorMsg("¡Error!", `${this.message}`);
          this.estado = error.status;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    get_logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    loadTokenFromStorage() {
      const token = localStorage.getItem("token");
      if (token) {
        this.token = token;
      }
    },
    loadUserFromStorage() {
      const user = localStorage.getItem("user");
      if (user) {
        this.user = JSON.parse(user);
      }
    },
    formatErrors(errors) {
      let messages = [];
      if (typeof errors === "object") {
        for (const [field, errorMessages] of Object.entries(errors)) {
          messages.push(`${errorMessages}`);
        }
      } else if (typeof errors === "string") {
        messages.push(errors);
      }
      return messages.join(" ");
    },
  },
});
