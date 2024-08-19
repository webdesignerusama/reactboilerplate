// src/Router.js
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Home';
import LoginPage from '../Pages/LoginPageView';
import UserPage from '../Pages/UserPageView';
import AdminPage from '../Pages/AdminPageView';
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
            <LoginPage />
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
       <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
