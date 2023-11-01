import { useContext  } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/Firebase";
import Step1 from "../../components/step/Step1";
import Step2 from "../../components/step/Step2";
import Step3 from "../../components/step/Step3";
import PDFResume from "../../components/PDFResume/PDFResume";

import styles from "./ResumeBuilder.module.css";
import { UserResumeContext } from "../../context/UserResumeContext";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { currentStep, resume } = useContext(UserResumeContext);

  const handleLodOut = () => {
    signOutUser();
  };

  return (
    <div className={styles.container}>
      <h1>Welcome in resume builder</h1>
      {currentUser ? (
        <>
          <div>
            <p>Create yo own resume</p>
            <Button onClick={handleLodOut}>Log out</Button>
          </div>
          <div className={styles.form}>
            {currentStep === 0 && <Step1 />}
            {currentStep === 1 && <Step2 />}
            {currentStep === 2 && <Step3 />}
            {currentStep === 3 && <PDFResume resume={resume} />}
          </div>
        </>
      ) : (
        <div>
          <p>Before you start </p>
          <div className={styles.df}>
            <Button
              onClick={() => {
                navigate("/signIn");
              }}
            >
              Sign in
            </Button>
            <Button
              onClick={() => {
                navigate("/signUp");
                // handleClick("/signUp");
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
