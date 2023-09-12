import React from "react";
import styles from "./ContactField.module.css";
import { FaLinkedin, FaMapMarkedAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface IProps {
  contacts: {
    text: string;
    type: string;
    href: string;
   
  }[];
}

const typeMapping = (type = "", text: string, href: string) => {
  if (!type && !href) return <div>{text}</div>;
  
  return (
    <a target={type!== 'email' ?"_blank": ''} href={href} rel="noreferrer">
      {text}
    </a>)
  
  
};

const ContactField = ({ contacts }: IProps) => {
  const handleLinkClick = (href: string) => {
    if (href) window.location.href = href;
  };

  

  return (
    <div>
      {contacts.map(({ text, type, href,  }) => {
        let icon: React.ReactNode  = null;
        (type === "email") ? icon = <MdEmail />: (type === "map")? icon = <FaMapMarkedAlt />:  icon = <FaLinkedin />
        return (
          <div key={text} className={styles.grid}>
            <div className={styles.wrapperIcon}>
              { icon && React.cloneElement(icon, {
                className: styles.icon,
                onClick: () => handleLinkClick(href),
              })}
            </div>
            <div className={styles.text}>{typeMapping(type, text, href)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactField;
