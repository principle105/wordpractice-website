import React, { useState } from "react"
import styles from "../styles/components/CookiePopup.module.css";
import Cookie from "../images/cookie.png";

const CookiePopup = () => {

  const [acceptedCookies, setAcceptedCookies] = useState(localStorage.getItem("cookieAccepted"));

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", 1)
    setAcceptedCookies(1)
  }

  return !acceptedCookies && (
    <div className={styles.container}> 
      <div className={styles.content}>
        <img className={styles.icon} src={Cookie} alt="Cookie"/>
        <div className={styles.content}>
          <h1 className={styles.text}>Cookie Consent</h1>
          <p className={styles.text}>We use cookies to ensure you get the best experience on our website.</p>
        </div>
        <div className={styles.btns}>
          <button 
            className={styles.understand} 
            onClick={() => handleAccept()}>
            I understand
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookiePopup;
