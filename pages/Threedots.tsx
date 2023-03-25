import React from "react";
import styles from "../styles/Vision.module.scss";
import Layout from "./components/home/Layout";

function Threedots() {
  return (
    <>
      <Layout title="Comming soon...">
        <div className={styles.centerImage} >
          <div className={styles.contentsBox}>
            <div className={styles.pulseWrapper}>
              <div className={styles.pulseDot1}></div>
              <div className={styles.pulseDot2}></div>
              <div className={styles.pulseDot3}></div>
            </div>
          </div>
          {/* hrefで飛びたい所はidを指定
          <a className={styles.myLink} href="#section1">
          Scroll
        </a> */}
          <p>Comming soon...
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Threedots;