import axiosClient from "api-client/axios-client";
import { LoginPayload } from "models/auth";

const APIs = {
  LOGIN: "/login",
  LOGOUT: "/logout",
};

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post(APIs.LOGIN, payload);
  },

  logout() {
    return axiosClient.post(APIs.LOGOUT);
  },
};
