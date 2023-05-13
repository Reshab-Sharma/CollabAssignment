// import Logo from "../../public/";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.NavbarContainer}> 
        <img src="/Logo.svg" alt="logo"/>
        <div className={styles.rightSection}>
            <p className={styles.NavbarContainerPara}>Already have an account?</p>
            <button>Log In</button>
        </div>
    </div>
  )
}

