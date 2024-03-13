import './LoginPage.module.css';
import React from "react";
import Login from "../../components/Login/Login";
const authBG = require("../../assets/auth.png");

export default function LoginPage() {
    return (
        <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
            <Login />
            <div>
                <img src={authBG} style={{ position: "absolute", maxHeight: "100vh", width: "50vw", zIndex: 0 }} alt="Register Cover" />
                <h1 style={{ position: "relative", color: "white", position: "relative", zIndex: 1, left: "50%" }}>Your Personal Job Finder</h1>
            </div>
        </div>
    );
}
