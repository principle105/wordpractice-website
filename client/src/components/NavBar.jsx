import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import styles from "../styles/components/NavBar.module.css";
import DropDownMenu from "./DropDownMenu.jsx";
import Logo from "../images/logo.png";

const NavBar = ({login: {loggedIn,user_id,username,avatar}}) => {

  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  
  const checkBox = () => {
    setChecked(false);
  }

  const NavItem = (props) => {
    return (
      <li>
        <NavLink to={props.to} exact onClick={() => checkBox()} activeClassName={styles.active}>
          {props.name}
        </NavLink>
      </li>
    )
  }

  return (
    <div className={styles.container}>
      <label onClick={() => setChecked(!checked)}>
        <p className={(checked) ? "fas fa-times" : "fas fa-bars"}></p>
      </label>

      <div className={styles.branding}>
        <img src={Logo} alt="Logo" />
        <h1>wordPractice</h1>
      </div>

      <ul className={`${styles.desktop}${!checked ? "" : ` ${styles.on}`}`}>
        <NavItem to="/" name="Home" />
        <NavItem to="/form/ban-appeal" name="Ban Appeal" />
        <NavItem to="/form/staff-applications" name="Staff Applications" />
      </ul>

      {loggedIn ? (
        <div>
          <div className={styles.profile} onClick={() => setOpen(!open)}>
            <img className={styles.avatar} src={`https://cdn.discordapp.com/avatars/${user_id}/${avatar}.png`} alt="Profile"/>
            <p className={styles.username} >{username}</p>
          </div>
          {open && <DropDownMenu />}
        </div>
      ) : (
        <a className={styles.login_btn} href="http://localhost:5000/auth/discord/login">
          Login
        </a>
        
      )}
    </div>
  )
}

export default withRouter(connect(store => store)(NavBar));
