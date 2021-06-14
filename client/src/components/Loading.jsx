import React, { useState } from "react";
import styles from "../styles/components/Loading.module.css";
import Typical from "react-typical";

const Loading = () => {

  const [show, setShow] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }, [show])

  return !show && (
    <div className={styles.container}>
      <Typical
          wrapper="h1"
          loop={Infinity}
          steps={[
            "Loading...",1000,
            "",100,
          ]}
        />
    </div>
  )
}

export default Loading;
