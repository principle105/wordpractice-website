import React from "react";
import styles from "../../styles/forms/BanAppeal.module.css";

const ban_appeal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h2 className={styles.title}>Ban Appeal</h2>
        <p className={styles.desc}>This is the form for the ban appeal</p>
      </div>
    </div>
  )
}

export default ban_appeal
