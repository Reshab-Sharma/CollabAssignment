import {useState} from "react";
import styles from "./SignUp.module.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

 export default function SignUp() {
    const [value, setValue] = useState()

  return (
    <div className={styles.signUpContainer}>
      
        <img src="/assets/BackArrow.svg" alt="BackButton"/>
        <div className={styles.signUpBelowContainer}>

        <p className={styles.SignUpContainerPara}>Lets Get Started</p>
        <div className={styles.LinkedinButton}>
            <div className={styles.Logo}>
            <img src="/assets/LinkedinLogo.svg" />
            </div>
            <button className={styles.Text}>Sign up with LinkedIn</button>
        </div>
        <div className={styles.LinkedinButton}>
            <div className={styles.GoogleLogo}>
            <img src="/assets/GoogleLogo.svg" />
            </div>
            <button className={styles.Text}>Sign up with Google</button>

        </div>
        <div className={styles.signUpOrContainer}>
          <img className={styles.LineIcon} src="./assets/lline.svg"/>
          <p className={styles.OrText}>Or</p>
          <img className={styles.LineIcon} src="./assets/lline.svg"/>
        </div>
        {/* manual SignUp */}

        <div  className={styles.inputBoxContainer}>
          <div >

          <p className={styles.inputBoxLabel}>First Name <span className={styles.inputBoxLabelRequired}>(required)</span></p>
          <input className={styles.inputBox} type="text" name="first_name" placeholder="eg: John"/>
          </div>
        
         <div >

          <p className={styles.inputBoxLabel}>Last Name <span className={styles.inputBoxLabelRequired}>(required)</span></p>
          <input className={styles.inputBox} type="text" name="first_name" placeholder="eg: John"/>
         </div>
        </div>
        <div className={styles.inputBoxContainer}>
          <div>

          <p className={styles.inputBoxLabel}>Email <span className={styles.inputBoxLabelRequired}>(required)</span></p>
          <input className={styles.inputBox} type="text" name="first_name" placeholder="eg: John"/>
          </div>
        
         <div >

          <p className={styles.inputBoxLabel}>Phone Number <span className={styles.inputBoxLabelRequired}>(required)</span></p>
          {/* <input className={styles.inputBox} type="text" name="first_name" placeholder="eg: John"/> */}
           <PhoneInput
      placeholder="Enter phone number"
      defaultCountry="US"
      value={value}
      onChange={setValue}
      className={styles.PhoneInput}
      />
         </div>
        </div>
        </div>
        <div className={styles.Btn}>

        <button className={styles.SignUpBtn}>Continue with Email</button>
        </div>
        <div className={styles.BottomContainer}>

        <p className={styles.BottomPara}>By continuing, you agree to CollabTalent’s <a href="#">Terms & Conditions </a>and <a href="#"> Privacy Policy</a></p>
        <p className={styles.BottomPara}>Or Create a <a href="#">Candidate account</a></p>
        <p className={styles.BottomPara}>Have an account already? <a href="#">Log In</a></p>
        <p className={styles.BottomPara}>© 2021 - 2022 CollabTalent® Global Inc. • Privacy Policy • Security • Contact </p>
        </div>

    </div>
  )
}

