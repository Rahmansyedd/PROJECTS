import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, SetName] = useState("syed");
  const [email, SetEmail] = useState("syed@gmail.com");
  const [text, SetText] = useState("good");


  const onSubmit = (event) => {
    // stop to reload page while we fill and submit the form seee 11
    event.preventDefault();

    SetName(event.target[0].value)
    SetEmail(event.target[1].value)
    SetText(event.target[2].value)
    // name = event.target[0].value

    console.log({
      name,
      email,
      text
    })


    // console.log("name",event.target[0].value)
    // console.log("email",event.target[1].value)
    // console.log("text",event.target[2].value)

  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<ImPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit} >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {
              name + " " + email + " " + text
            }
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="\images\pic1.svg" alt="" />
      </div>
    </section>

  );
};

export default ContactForm;