import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication.jsx";

export function App() {
    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();
    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);

    if (loadingUser) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
