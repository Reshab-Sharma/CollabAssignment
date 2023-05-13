import styles from "./QuestionaireSection.module.css"
export default function QuestionaireSection() {
  return (
    <div className={styles.SectionContainer}>
        <p className={styles.SectionHeading}>Help us customize your experience by <br/> telling us a bit about yourself</p>
          <label className={styles.DropdownLabel} for="role">Select the role that best describes you <span className={styles.DropdownRequiredText}>(required)</span></label>
          <br/>
  <select className={styles.Dropdown} name="role" id="role">
    <option value="Software engineer">Software engineer</option>
    <option value="Software engineer">Hr</option>
    <option value="Software engineer">Marketer</option>
    <option value="Software engineer">Editor</option>
  </select>

    <label className={styles.DropdownLabel} for="role">How many employees does your company have? <span className={styles.DropdownRequiredText}>(required)</span></label>
          <br/>
  <select className={styles.Dropdown} name="role" id="role">
    <option value="Software engineer">Software engineer</option>
    <option value="Software engineer">Hr</option>
    <option value="Software engineer">Marketer</option>
    <option value="Software engineer">Editor</option>
  </select>

    <label className={styles.DropdownLabel} for="role">Select your country <span className={styles.DropdownRequiredText}>(required)</span></label>
          <br/>
  <select className={styles.Dropdown} name="role" id="role">
    <option value="Software engineer">Software engineer</option>
    <option value="Software engineer">Hr</option>
    <option value="Software engineer">Marketer</option>
    <option value="Software engineer">Editor</option>
  </select>

    <label className={styles.DropdownLabel} for="role">Company Name <span className={styles.DropdownRequiredText}>(required)</span></label>
          <br/>
  <select className={styles.Dropdown} name="role" id="role">
    <option value="Software engineer">Software engineer</option>
    <option value="Software engineer">Hr</option>
    <option value="Software engineer">Marketer</option>
    <option value="Software engineer">Editor</option>
  </select>
  
  <button className={styles.SectionButton}>Submit</button>
    </div>
  )
}

