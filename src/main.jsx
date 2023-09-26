import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

// router
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import About from "./routes/About/About.jsx";
import Home from "./routes/Home/Home.jsx";
import Register from "./routes/Register/Register.jsx";
import Login from "./routes/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import CreatePost from "./routes/CreatePost/CreatePost.jsx";
import Dashboard from "./routes/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: !{ user } ? <Login /> : <Navigate to="/" />,
            },
            {
                path: "/register",
                element: !{ user } ? <Register /> : <Navigate to="/" />,
            },
            {
                path: "/posts/create",
                element: { user } ? <CreatePost /> : <Navigate to="/login" />,
            },
            {
                path: "/dashboard",
                element: { user } ? <Dashboard /> : <Navigate to="/login" />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider value={{ user }}>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
