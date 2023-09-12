import {useContext} from "react";

import { ResumeContext } from "../../context/ResumeContext";

import ContactField from "../../components/contactField/ContactField";

import styles from "./Contact.module.css";

const Contact = () => {
const {resume: {contacts }  }= useContext(ResumeContext)
  return (
  <div className={styles.wrapper}>
      <div>
          <span>Get in Touch</span>
          <h2>Contact</h2>
      </div>
      <ContactField contacts={contacts}  />
    </div>
  );
};

export default Contact;
