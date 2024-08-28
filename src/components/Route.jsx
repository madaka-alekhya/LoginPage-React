import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired, getToken, removeToken } from "./authenticatejwt";

function ProtectedRoute({ children }) {
  const token = getToken();

  if (!token || isTokenExpired(token)) {
    removeToken();
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
