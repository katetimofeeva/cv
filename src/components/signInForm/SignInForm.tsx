import { useState, FormEvent, ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase";
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";

import styles from "./SignInForm.module.css";
import ResumeBuilder from "../../pages/resumeBuilder/ResumeBuilder";

const defaultFormValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValue, setFormValue] = useState(defaultFormValue);
  const { email, password } = formValue;
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const logWithGoogleUser = async () => {
    await signInWithGooglePopup();
    // navigate("/resum/stepFirst");
  };
  const handleClick = () => {
    navigate("/signUp");
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      cleanFormFields();
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        alert("Write correct password");
      } else if (err.code === "auth/user-not-found") {
        alert("Write correct email");
      }
      console.log(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const cleanFormFields = () => {
    setFormValue(defaultFormValue);
  };

  return (
    <div className={styles.wrapper}>
      {!currentUser ? (
        <>
          <h2> I already have an account</h2>
          <span> Sing in with your email and password</span>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="email"
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <FormInput
              label="password"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
            />
            <div className={styles.df}>
              <Button type="submit">Sign in</Button>
              <Button
                type="button"
                buttonType="google"
                onClick={logWithGoogleUser}
              >
                Google sign in
              </Button>
            </div>
          </form>
          <p>
            Don't have account yet? <span onClick={handleClick}>Sign up</span>{" "}
          </p>
        </>
      ) : (
        <ResumeBuilder />
      )}
    </div>
  );
};

export default SignInForm;
