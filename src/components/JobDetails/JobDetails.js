import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getJobDetailsById } from "../../apis/job";
import styles from "./JobDetails.module.css";

const JobDetails = ({}) => {
  let { id } = useParams();

  const [jobDetails, setJobDetails] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    isAllowedToEdit();
    fetchJobDetailsById();
  }, []);

  const fetchJobDetailsById = async () => {
    if (!id) return;
    const response = await getJobDetailsById(id);
    setJobDetails({
      companyName: "google",
      title: "Software Developer",
      jobType: "Full Time",
      location: "Bangalore",
      salary: "10000",
      skills: ["React", "Node", "MongoDB"],
      description: "Software Developer at Google Bangalore for 6 months ",
      about: "lorem ipsum",
    });
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
            <p className={styles.containerText}>{jobDetails?.companyName}</p>
          </div>
          <div className={styles.containerBottom}>
            <div className={styles.preHeading}>
              <p className={styles.lightText}>{jobDetails.jobType}</p>
            </div>
            <div className={styles.heading}>
              <div>
                <p className={styles.boldText}>{jobDetails.title}</p>
                <p className={styles.locationText}>{jobDetails.location}</p>
              </div>
            </div>
            <div>
              <button className={styles.edit}>Edit Job</button>
            </div>
            <div className={styles.perks}>
              <div>
                <p className={styles.lightText}>Stipend</p>
                <p className={styles.lightText}>{jobDetails.salary}</p>
              </div>
              <div>
                <p className={styles.lightText}>Duration</p>
                <p className={styles.lightText}>6 Months</p>
              </div>
            </div>
            <div className={styles.info}>
              <h2>About Company</h2>
              <p className={styles.lightText}>{jobDetails.about}</p>
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
              <h2>About the job/internship</h2>
              <p className={styles.lightText}>{jobDetails.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default JobDetails;
