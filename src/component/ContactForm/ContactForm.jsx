import { MdMessage, MdPadding } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  let [name, namee] = useState("");
  let [email, mail] = useState("");
  let [comment, area] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    namee(event.target[0].value);
    mail(event.target[1].value);
    area(event.target[2].value);

    // console.log("Name",event.target[0].value);
    //   console.log("Email",event.target[1].value);
    //   console.log("Comment",event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.Contactform}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>
        <Button
          longBtn={true}
          text="VIA EMAIL FORM"
          icon={<IoIosMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="mail">E-mail</label>
            <input type="email" name="mail" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
          <div style={{ display: " " }}>
            {name + " " + email + " " + comment}
          </div>
        </form>
      </div>
      <div className={styles.contact_images}>
        <img src="/image/formimg.svg" alt="formimg" />
      </div>
    </section>
  );
};

export default ContactForm;
