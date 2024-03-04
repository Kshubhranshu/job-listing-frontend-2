import React, { useState } from "react";
import { registerUser } from "../../apis/auth";
import { useNavigate } from "react-router";
import styles from "./Register.module.css";

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        if (!formData.email || !formData.password || !formData.name) {
            alert("Fields can't be empty");
        }

        const response = await registerUser({ ...formData });
        alert(response.message);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Create an account</h1>
            <h2 className={styles.h2}>Your personal job finder is here</h2>
            <input
                className={styles.input}
                name="name"
                onChange={handleChange}
                type={"text"}
                placeholder="Name"
            ></input>
            <input
                type="checkbox"
                onChange={(event) => console.log(event.target.checked)}
                name="checkbox"
                id=""
            />
            <input
                className={styles.input}
                name="email"
                onChange={handleChange}
                type={"email"}
                placeholder="Email"
            ></input>
            <input
                className={styles.input}
                name="mobile"
                onChange={handleChange}
                type={"tel"}
                placeholder="Mobile"
            ></input>
            <input
                className={styles.input}
                name="password"
                onChange={handleChange}
                type={"password"}
                placeholder="Password"
            ></input>
            <button onClick={handleSubmit} className={styles.button}>
                Create Account
            </button>
            {/* <Button>Create account</Button> */}
            <p className={styles.footer}>
                Already have an account?
                <span
                    className={styles.underline}
                    onClick={() => navigate("/login")}
                >
                    Sign in
                </span>
            </p>
        </div>
    );
}
