import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_SKILLS } from "../../utils/constants";
import { createJobPost, updateJobPostById } from "../../apis/job";
import styles from "./JobPost.module.css";

export default function JobPost() {
    const { state } = useLocation();
    const [stateData] = useState(state?.jobDetails);
    const [formData, setFormData] = useState({
        companyName: "" || stateData?.companyName,
        logoUrl: "" || stateData?.logoUrl,
        title: "" || stateData?.title,
        description: "" || stateData?.description,
        salary: "" || stateData?.salary,
        location: "" || stateData?.location,
        duration: "" || stateData?.duration,
        locationType: "" || stateData?.locationType,
        skills: stateData?.skills || [],
        information: "" || stateData?.information,
        salary: "" || stateData?.salary,
        jobType: "" || stateData?.jobType,
        location: "" || stateData?.location,
        about: "" || stateData?.about,
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
        if (
            !formData.companyName ||
            !formData.logoUrl ||
            !formData.title ||
            !formData.salary ||
            !formData.jobType ||
            !formData.location ||
            !formData.description ||
            !formData.about ||
            !formData.skills ||
            !formData.information ||
            !formData.locationType
        ) {
            alert("Please fill in all fields.");

            return;
        }

        if (state?.edit) {
            updateJobPostById(state?.id, formData);
            return;
        }

        await createJobPost(formData);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Add job description</h1>
            <div className={styles.jobForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="companyName">
                        Company Name:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="companyName"
                        value={formData.companyName}
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
                        value={formData.logoUrl}
                        onChange={handleChange}
                        placeholder="Enter logo URL"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="title">
                        Position:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter job position"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="duration">
                        Duration:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="Enter job duration"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="salary">
                        Salary:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="Enter job salary"
                    />
                </div>

                <div className={styles.selectGroup}>
                    <label className={styles.label} htmlFor="jobType">
                        Job Type:
                    </label>
                    <select
                        className={styles.select}
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                    >
                        <option value="">Select job type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                    </select>
                </div>

                <div className={styles.selectGroup}>
                    <label className={styles.label} htmlFor="locationType">
                        Location Type:
                    </label>
                    <select
                        className={styles.select}
                        name="locationType"
                        value={formData.locationType}
                        onChange={handleChange}
                    >
                        <option value="Remote">Remote</option>
                        <option value="Office">Office</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="location">
                        Location:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Enter job location"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="description">
                        Description:
                    </label>
                    <textarea
                        className={styles.input}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter job description"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="about">
                        About:
                    </label>
                    <textarea
                        className={styles.input}
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="Enter company description"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="skills">
                        Information:
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        name="information"
                        value={formData.information}
                        onChange={handleChange}
                        placeholder="information"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="skills">
                        Skills:
                    </label>
                    <select
                        className={styles.select}
                        type="text"
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
                <div className={styles.skills}>
                    {formData?.skills?.map((element) => (
                        <div>
                            {element}&nbsp;
                            <button onClick={() => removeSkill(element)}>
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleSubmit} className={styles.add}>
                {state?.edit ? "Edit Job" : "+ Add Job "}
            </button>
            <button className={styles.cancel}>Cancel</button>
        </div>
    );
}
