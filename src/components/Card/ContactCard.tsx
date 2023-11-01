import React, { useContext, useState } from "react";

import FormInput from "../formInput/FormInput";
import { UserResumeContext } from "../../context/UserResumeContext";

const ContactCard = () => {
  const {
    resume: { contacts },
    setResume,
  } = useContext(UserResumeContext);

  const [phoneError, setPhoneError] = useState<string>("");
  const [linkedinError, setLinkedinError] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneRegex = /^\+?\d{10,11}$/;
      if (!phoneRegex.test(value)) {
        setPhoneError(
          "Invalid phone number. Please enter a valid phone number."
        );
      } else {
        setPhoneError("");
      }
    }

    if (name === "linkedin") {
      const linkedinRegex =
        /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
      if (!linkedinRegex.test(value)) {
        setLinkedinError(
          "Invalid LinkedIn profile URL. Please enter a valid LinkedIn URL."
        );
      } else {
        setLinkedinError("");
      }
    }
    setResume((prev) => ({
      ...prev,
      contacts: { ...prev.contacts, [name]: value },
    }));
  };

  return (
    <div>
      <FormInput
        type="tel"
        name="phone"
        placeholder="Write your phone number"
        value={contacts.phone}
        onChange={handleInputChange}
      />
      {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
      <FormInput
        type="text"
        name="linkedin"
        placeholder="Write link on your LinkedIn"
        value={contacts.linkedin}
        onChange={handleInputChange}
        />
        {linkedinError && <p style={{ color: "red" }}>{linkedinError}</p>}
    </div>
  );
};

export default ContactCard;
