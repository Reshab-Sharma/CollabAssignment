import styles from "./PasswordSection.module.css"

export default function PasswordSection() {
  return (
    <div className={styles.Container}>
    <img src="/assets/BackArrow.svg" alt="BackButton"/>
    <p className={styles.Heading}>Sign up as <br/>
     jaydeepdas06@gmail.com</p>
     <div className={styles.inputBoxContainer}>

     <div style={{"position":"relative"}}>
         <p className={styles.inputBoxLabel}>Create password <span className={styles.inputBoxLabelRequired}>(required)</span></p>
          <input className={styles.inputBox} type="text" name="first_name" placeholder="Enter password"/>
          <img src="/assets/HideIcon.svg" className={styles.HideIcon}/>
     </div>
     <div style={{"position":"relative"}}>
         <p className={styles.inputBoxLabel}>Confirm password <span className={styles.inputBoxLabelRequired}>(required)</span></p>
          <input className={styles.inputBox} type="text" name="first_name" placeholder="Enter password again"/>
          <img src="/assets/eyeIcon.svg" className={styles.eyeIcon}/>

     </div>
     </div>
     <div className={styles.SubmitBtnContainer}>

     <button className={styles.SubmitBtn}>Submit</button>
     </div>
    </div>
  )
}

