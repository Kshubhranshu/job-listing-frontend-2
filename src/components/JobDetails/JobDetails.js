import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJobDetailsById } from "../../apis/job";
import styles from "./JobDetails.module.css";

const JobDetails = ({ }) => {
    let { id } = useParams();
    const navigate = useNavigate();

    const [jobDetails, setJobDetails] = useState({
        id: 10,
        posted: "1w ago",
        companyName: "Cuvette work from home job/internship at Adyaka Infosec Private Limited",
        jobType: "Part Time",
        title: "Web Developer",
        location: "Bangalore",
        duration: "6 Months",
        salary: 120000,
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        skills: ["React JS", "Node JS", "Lambda", "Devops"],
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

    });
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        // isAllowedToEdit();
        // fetchJobDetailsById();
    }, []);

    const fetchJobDetailsById = async () => {
        if (!id) return;
        const response = await getJobDetailsById(id);
        setJobDetails(response.data);
    };

    const isAllowedToEdit = () => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsEditable(true);
        }
    };

    return (
        <>
            {jobDetails ? (
                <div className={styles.body}>
                    <div className={styles.nav}>
                        <p className={styles.navText}>Jobfinder</p>
                        <div className={styles.btnGrp}>
                            <button className={styles.login}>Login</button>
                            <button className={styles.register}>Register</button>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.containerText}>
                            {jobDetails?.companyName}
                        </p>
                    </div>
                    <div className={styles.containerBottom}>
                        <div className={styles.preHeading}>
                            <p className={styles.lightText}>
                                {jobDetails?.posted} • {jobDetails.jobType}
                            </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className={styles.heading}>
                                <div>
                                    <p
                                        style={{
                                            margin: "0px"
                                        }}
                                        className={styles.boldText}>
                                        {jobDetails.title}
                                    </p>
                                    <p className={styles.locationText}>
                                        {jobDetails.location}
                                    </p>
                                </div>
                            </div>
                            <div>
                                {
                                    isEditable && <button
                                        onClick={() => {
                                            navigate("/job-post", {
                                                state: {
                                                    id: jobDetails._id,
                                                    jobDetails: jobDetails,
                                                    edit: true,
                                                },
                                            });
                                        }}
                                        className={styles.edit}
                                    >
                                        Edit Job
                                    </button>
                                }
                            </div>
                        </div>


                        <div className={styles.perks}>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "5px",
                                        alignItems: "center",
                                        width: "10vw",
                                    }}>
                                    <span
                                        style={{
                                            color: "gray",
                                        }}
                                        class="material-symbols-outlined"
                                    >
                                        universal_currency_alt
                                    </span>
                                    <p className={styles.lightText}>Stipend</p>
                                </div>
                                <p className={styles.lightText2}>
                                    Rs.{jobDetails.salary}/month
                                </p>
                            </div>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "5px",
                                        alignItems: "center",
                                        width: "10vw",
                                    }}
                                >

                                    <span
                                        style={{
                                            color: "gray",
                                        }}
                                        class="material-symbols-outlined"
                                    >
                                        calendar_today
                                    </span>

                                    <p className={styles.lightText}>Duration</p>
                                </div>

                                <p className={styles.lightText2}>{jobDetails.duration}</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h2>About Company</h2>
                            <p className={styles.lightText}>
                                {jobDetails.about}
                            </p>
                        </div>
                        <div className={styles.info}>
                            <h2>Skill(s) Required</h2>
                            {jobDetails?.skills?.map((skill) => {
                                return (
                                    <p className={styles.skill} key={skill}>
                                        {skill}
                                    </p>
                                );
                            })}
                        </div>
                        <div className={styles.info}>
                            <h2>Additional Information</h2>
                            <p className={styles.lightText}>
                                {jobDetails.description}
                            </p>
                        </div>
                    </div>
                </div >
            ) : (
                <></>
            )}
        </>
    );
};

export default JobDetails;
