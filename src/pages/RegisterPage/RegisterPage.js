import './RegisterPage.module.css';
import React from "react";
import Register from "../../components/Register/Register";
const authBG = require("../../assets/auth.png");


export default function RegisterPage() {
    return (
        <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
            <Register />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={authBG} style={{ position: "absolute", maxHeight: "100vh", width: "50vw", zIndex: 0 }} alt="Register Cover" />
                <h1 style={{ position: "relative", color: "white", position: "relative", zIndex: 1, left: "50%" }}>Your Personal Job Finder</h1>
            </div>
        </div>
    );
}