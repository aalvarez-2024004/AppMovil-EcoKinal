import axios from "axios";
import { AUTH_ENDPOINTS } from "../constants/endpoint";

const authClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginRequest    = (data) => authClient.post(AUTH_ENDPOINTS.LOGIN, data);
export const registerRequest = (data) => authClient.post(AUTH_ENDPOINTS.REGISTER, data);

export const verifyEmailRequest = (token) => authClient.get(AUTH_ENDPOINTS.VERIFY(token));

export const forgotPasswordRequest = (data) => authClient.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, data);
export const resetPasswordRequest  = (data) => authClient.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);

export const profileRequest = (token) =>
  authClient.get(AUTH_ENDPOINTS.PROFILE, {
    headers: { Authorization: `Bearer ${token}` },
  });