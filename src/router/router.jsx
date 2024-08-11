// src/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import UserPage from '../components/User';
import ProtectedRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <AboutPage />
          </PublicRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
