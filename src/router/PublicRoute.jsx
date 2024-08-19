// src/PublicRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Replace with your actual authentication logic

  if (isAuthenticated) {
    return <Navigate to="/" />; // Redirect to home if user is authenticated
  }

  return children; // Otherwise, render the public component (e.g., LoginPage)
};

export default PublicRoute;
