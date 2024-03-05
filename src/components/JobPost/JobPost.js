import React, { useState, useEffect } from "react";
import { DEFAULT_SKILLS } from "../../utils/constants";
import { createJobPost } from "../../apis/job";
import styles from "./JobPost.module.css";

export default function JobPost() {
    const [formData, setFormData] = useState({
        companyName: "",
        logoUrl: "",
        title: "",
        description: "",
        salary: "",
        location: "",
        duration: "",
        locationType: "",
        skills: [],
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const addSkills = (event) => {
        const skill = event.target.value;
        const actualSkills = formData.skills;
        const filteredSkills = actualSkills.filter(
            (element) => element == skill
        );

        if (!filteredSkills.length) {
            const updatedSkills = [...formData.skills, skill];
            setFormData({ ...formData, skills: updatedSkills });
        }
    };

    const removeSkill = (skill) => {
        const actualSkills = formData.skills;
        const filteredSkills = actualSkills.filter(
            (element) => element !== skill
        );

        setFormData({ ...formData, skills: filteredSkills });
    };

    const handleSubmit = async () => {
        // add some validations

        await createJobPost(formData);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className={styles.container}>
            {/* <h1 className={styles.h1}>
                {isEditExistingJobPost ? <>Edit</> : <>Add</>} job description
            </h1> */}
            <div className={styles.jobForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="companyName">
                        Company Name:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="companyName"
                        value={formData?.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="logoURL">
                        Logo URL:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="logoUrl"
                        value={formData?.logoUrl}
                        onChange={handleChange}
                        placeholder="Enter logo URL"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="position">
                        Title:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="title"
                        value={formData?.title}
                        onChange={handleChange}
                        placeholder="Enter job position"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="description">
                        Description:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="description"
                        value={formData?.description}
                        onChange={handleChange}
                        placeholder="Enter job salary"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="skills">
                        Skills:
                    </label>
                    <select
                        className={styles.input}
                        name="skills"
                        onChange={addSkills}
                    >
                        <option disabled selected>
                            Please select skills
                        </option>
                        {DEFAULT_SKILLS.map((element) => (
                            <option>{element}</option>
                        ))}
                    </select>
                </div>
                <div>
                    {formData?.skills?.map((element) => (
                        <span>
                            {element}&nbsp;
                            <button onClick={() => removeSkill(element)}>
                                X
                            </button>
                        </span>
                    ))}
                </div>
            </div>
            <button
                // onClick={() => navigate("/listing")}
                className={styles.cancel}
            >
                Cancel
            </button>
            {/* {isEditExistingJobPost ? (
                <button onClick={handleSubmit} className={styles.add}>
                    Edit Job
                </button>
            ) : (
                <button onClick={handleSubmit} className={styles.add}>
                    + Add Job
                </button>
                
            )} */}
            <button className={styles.add} onClick={handleSubmit}>
                + Add Job
            </button>
        </div>
    );
}
