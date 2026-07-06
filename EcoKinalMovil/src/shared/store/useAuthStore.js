import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

import {
  loginRequest,
  registerRequest,
  verifyEmailRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  profileRequest,
} from "../api/authClient";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  _hasHydrated: false,

  setHasHydrated: (state) => set({ _hasHydrated: state }),

  // Restaura sesión al abrir la app
  restoreSession: async () => {
    try {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        set({ token, isAuthenticated: true });
        await get().getProfile();
      }
    } catch (err) {
      console.log("restoreSession error:", err);
    } finally {
      set({ _hasHydrated: true });
    }
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const res = await loginRequest({ email, password });
      const { user, token } = res.data;

      await SecureStore.setItemAsync("token", token);

      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });

      return { success: true, user };
    } catch (err) {
      const message = err.response?.data?.message || "Error de autenticación";
      set({ error: message, isLoading: false });
      return { success: false, error: message };
    }
  },

  register: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const res = await registerRequest(data);
      set({ isLoading: false });
      return { success: true, data: res.data };
    } catch (err) {
      const message = err.response?.data?.message || "Error en registro";
      set({ error: message, isLoading: false });
      return { success: false, error: message };
    }
  },

  verifyEmail: async (token) => {
    try {
      set({ isLoading: true, error: null });
      const res = await verifyEmailRequest(token);
      set({ isLoading: false });
      return { success: true, message: res.data.message };
    } catch (err) {
      const message = err.response?.data?.message || "Error al verificar la cuenta";
      set({ error: message, isLoading: false });
      return { success: false, error: message };
    }
  },

  requestPasswordReset: async (email) => {
    try {
      set({ isLoading: true, error: null });
      const res = await forgotPasswordRequest({ email });
      set({ isLoading: false });
      return { success: true, message: res.data.message };
    } catch (err) {
      const message = err.response?.data?.message || "Error al enviar el correo";
      set({ error: message, isLoading: false });
      return { success: false, error: message };
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      set({ isLoading: true, error: null });
      const res = await resetPasswordRequest({ token, newPassword });
      set({ isLoading: false });
      return { success: true, message: res.data.message };
    } catch (err) {
      const message = err.response?.data?.message || "Error al restablecer contraseña";
      set({ error: message, isLoading: false });
      return { success: false, error: message };
    }
  },

  getProfile: async () => {
    try {
      const { token } = get();
      const res = await profileRequest(token);
      set({ user: res.data.user });
      return res.data.user;
    } catch (err) {
      console.log("getProfile error:", err);
      await get().logout();
    }
  },

  clearError: () => set({ error: null }),

  logout: async () => {
    try {
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
      await SecureStore.deleteItemAsync("token");
    } catch (err) {
      console.log("logout error:", err);
    }
  },
}));