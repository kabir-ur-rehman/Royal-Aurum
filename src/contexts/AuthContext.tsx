// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type Role = "buyer" | "admin";
type User = { id: string; name: string; email: string; role: Role } | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  isAdmin: () => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_USER_KEY = "Royal Aurum_user";
const LOCAL_USERS_KEY = "Royal Aurum_users";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Dev bypass: auto-login a developer during `npm run dev`
  const devUser = import.meta.env.MODE === "development"
    ? { id: "dev", name: "Developer", email: "dev@luxora.com", role: "admin" as Role }
    : null;

  const [user, setUser] = useState<User>(() => {
    if (devUser) return devUser;
    const raw = localStorage.getItem(LOCAL_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  });

  const login = (email: string, password: string) => {
    // Admin test credentials (kept here only for dev). Remove in prod.
    if (email === "admin@royalaurum.com" && password === "1234kabir") {
      const admin = { id: "admin", name: "Admin", email, role: "admin" as Role };
      setUser(admin);
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(admin));
      return true;
    }

    const users = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || "[]");
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      const safeUser = { id: found.id || found.email, name: found.name, email: found.email, role: found.role || "buyer" };
      setUser(safeUser);
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(safeUser));
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string, name: string) => {
    const users = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || "[]");
    if (users.some((u: any) => u.email === email)) return false;
    const newUser = { id: Date.now().toString(), name, email, password, role: "buyer" };
    users.push(newUser);
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
    const safeUser = { id: newUser.id, name: newUser.name, email: newUser.email, role: "buyer" as Role };
    setUser(safeUser);
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(safeUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_USER_KEY);
  };

  const isAdmin = () => user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
