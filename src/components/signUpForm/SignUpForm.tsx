import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../context/UserContext";

import {
  createUserDoc,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

import styles from './SignUpForm.module.css'


const defaultFormValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formValue, setFormValue] = useState(defaultFormValue);
  const navigate=useNavigate()

  const {currentUser} = useContext(UserContext)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleClick=()=>{
    navigate('/signIn', { replace: true })
  }
  const cleanFormFields = () => {
    console.log('clean')
    setFormValue(defaultFormValue);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue.password !== formValue.confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const result = await createAuthUserWithEmailAndPassword(
        formValue.email,
        formValue.password
      );
      

      await createUserDoc(result?.user, { displayName: formValue.displayName });
      cleanFormFields();
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2> Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          value={formValue.displayName}
          onChange={handleChange}
          name="displayName"
          required={true}
        />

        <FormInput
          label="Email"
          type="email"
          value={formValue.email}
          onChange={handleChange}
          name="email"
          required
        />

        <FormInput
          label="Password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
          name="password"
          required
        />
        <FormInput
          label="Confirm password"
          type="password"
          value={formValue.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
      <p>if you haven't had account <span onClick={handleClick}>Sign in</span> please</p>
    </div>
  );
};

export default SignUpForm;
