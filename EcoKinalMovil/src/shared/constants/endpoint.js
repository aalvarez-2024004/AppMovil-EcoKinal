import { Platform } from "react-native";

const USE_LOCAL_LAN = false;

const BASE_URL =
  Platform.OS === "web"
    ? "https://app-movil-eco-kinal.vercel.app/api"
    : USE_LOCAL_LAN
    ? "http://192.168.0.5:3005/api"
    : "https://app-movil-eco-kinal.vercel.app/api";

export const AUTH_ENDPOINTS = {
  LOGIN:           `${BASE_URL}/auth/login`,
  REGISTER:        `${BASE_URL}/auth/register`,
  VERIFY:          (token) => `${BASE_URL}/auth/verify/${token}`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
  RESET_PASSWORD:  `${BASE_URL}/auth/reset-password`,
  PROFILE:         `${BASE_URL}/auth/profile`,
};

export const USER_ENDPOINTS = {
  CHANGE_PASSWORD: `${BASE_URL}/users/change-password`,
  UPDATE_PROFILE:  `${BASE_URL}/users/update-profile`,
  PUBLIC_PROFILE:  (uid) => `${BASE_URL}/users/profile/${uid}`,
};

export default BASE_URL;