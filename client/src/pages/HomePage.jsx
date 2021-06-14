import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "../styles/pages/HomePage.module.css";
import Typical from "react-typical";

const HomePage = ({login: {loggedIn,username}}) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.hero_text}>
        <Typical
          wrapper="h1"
          steps={[
            "The Typing Test Discord Bot ",
          ]}
        />
        <p>Practice your typing skills while having fun, compete with typists from around the world.</p>
        <a className={styles.invite_btn} href="https://discord.com/oauth2/authorize?client_id=743183681182498906&permissions=388160&scope=bot">Invite</a>
      </div>
    </div>
  )
}

export default withRouter(connect(store => store)(HomePage));