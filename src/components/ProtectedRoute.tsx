// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

type Props = { children: JSX.Element };

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();
  const location = useLocation();

  // If not logged in, send to /auth and keep the attempted path in state
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
