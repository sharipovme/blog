import { create } from "zustand";

interface AuthState {
  isAuth: boolean;
  role: string;
  setAuth: (isAuth: boolean) => void;
  setRole: (role: string) => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuth: !!localStorage.getItem("role"),
  role: localStorage.getItem("role") || "",
  setAuth: (isAuth) => set({ isAuth }),
  setRole: (role) => set({ role }),
}));
