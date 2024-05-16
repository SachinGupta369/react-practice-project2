import Button from "../Button/Button.module.css"
import styles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.ContactForm}>
          <Button/>
        </div>
        <div className={styles.contact_images}></div>
    </section>
  )
}

export default ContactForm