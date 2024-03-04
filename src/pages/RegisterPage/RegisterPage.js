import React from "react";
import Register from "../../components/Register/Register";

export default function RegisterPage() {
    return (
        <div style={{ display: "flex" }}>
            <Register />
            <img
                style={{ maxHeight: "100vh", width: "50vw" }}
                alt="Login cover"
            />
        </div>
    );
}
