import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/Firebase";
import Step1 from "../../components/form/Step1";
import Step2 from "../../components/form/Step2";

import styles from "./ResumeBuilder.module.css";
import { UserResumeContext } from "../../context/UserResumeContext";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const {currentStep, setCurrentStep} = useContext(UserResumeContext)
  console.log(currentUser, "currentUser");

  // useEffect(() => {
  //   if (currentUser && step === 0) {
  //     navigate("/resume/stepFirst");
  //   }
  // }, [currentUser, step, navigate]);

  const handleLodOut = () => {
    signOutUser();
  };

  console.log(currentStep, 'step')

  return (
    <div className={styles.container}>
      <h1>Welcome in resume builder</h1>
      {currentUser ? (
        <>
          <div>
            <p>Create yo own resume</p>
            <Button onClick={handleLodOut}>Log out</Button>
          </div>
          <div>
            {currentStep===0 && <Step1/>}
            {currentStep===1 && <Step2/>}
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
