import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Login from "./Pages/login/login";
import List from "./Pages/list/list";
import Single from "./Pages/single/single";
import New from "./Pages/new/new";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthProvider } from "./context/authContext.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/users" element={
              <ProtectedRoute>
                <List type="users" />
              </ProtectedRoute>
            } />
            <Route path="/users/:userId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            } />
            <Route path="/users/new" element={
              <ProtectedRoute>
                <New inputs={userInputs} title="Add New User" />
              </ProtectedRoute>
            } />
            <Route path="/products" element={
              <ProtectedRoute>
                <List type="products" />
              </ProtectedRoute>
            } />
            <Route path="/products/:productId" element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            } />
            <Route path="/products/new" element={
              <ProtectedRoute>
                <New inputs={productInputs} title="Add New Product" />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;