import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import styles from "../styles/pages/Form.module.css";
import forms from "../forms";

const Form = ({login: {loggedIn}, match: {params}}) => {
  // Checking if form route is valid
  if (!(params.id in forms)) {
    return <Redirect to="/" />
  }

  const Form = forms[params.id]
  
  return (
    <div className={styles.container}>
      {loggedIn ? (
        <Form />
      ) : (
        <h2 className={styles.login_msg}>Make sure to login before you complete this form</h2>
      )}
    </div>
  )
}

export default withRouter(connect(store => store)(Form));
