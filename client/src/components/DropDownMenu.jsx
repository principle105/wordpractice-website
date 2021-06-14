import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/DropDownMenu.module.css";
import { CSSTransition } from "react-transition-group";

const DropDownMenu = () => {

  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null); 
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
   
  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  
  const DropDownItem = (props) => {

    const handleClick = () => {
      props.onClick && props.onClick()
      props.goToMenu && setActiveMenu(props.goToMenu);
    }
    return (
      <div className={styles.item} onClick={() => handleClick()}>
        <span className={styles.icon_button}>{props.leftIcon}</span>
        {props.children}
        <span className={styles.icon_right}>{props.rightIcon}</span>
      </div>
    )
  }

  return (
    <div className={styles.container} style={{height: menuHeight}} ref={dropdownRef}>
      <CSSTransition 
        in={activeMenu === "main"} 
        unmountOnExit 
        timeout={500} 
        onEnter={calcHeight}
        classNames={{
          enterActive: styles.menu_enter_active,
          enterDone: styles.menu_enter,
          exitActive: styles.menu_exit_active,
          exitDone: styles.menu_exit
        }}
      >
        <div className={styles.menu}>
          <DropDownItem leftIcon="📈">
            Stats
          </DropDownItem>

          <DropDownItem leftIcon="⚙️" goToMenu="settings">
            Settings
          </DropDownItem>

          <DropDownItem leftIcon="🔒" onClick={() => window.location.href = "http://localhost:5000/auth/logout"}>
            Logout
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === "settings"} 
        unmountOnExit 
        timeout={500} 
        onEnter={calcHeight}
        classNames={{
          enterActive: styles.s_menu_enter_active,
          enterDone: styles.menu_enter,
          exitActive: styles.s_menu_exit_active,
          exitDone: styles.menu_exit
        }}
      >
        <div className={styles.menu}>
          <DropDownItem leftIcon="⬅️" goToMenu="main">
            Back
          </DropDownItem>

          <DropDownItem leftIcon="⚙️">
            HHAHAHAHHA
          </DropDownItem>
        </div>
      </CSSTransition>

    </div>
  )
}

export default DropDownMenu;