import React from "react";
import styles from "../styles/Vision.module.scss";
import Layout from "./components/home/Layout";

function Threedots() {
  return (
    <>
      <Layout title="Comming soon...">
          {/* hrefで飛びたい所はidを指定
          <a className={styles.myLink} href="#section1">
          Scroll
        </a> */}
          <p>Comming soon...
          </p>
      </Layout>
    </>
  );
}

export default React.memo(Threedots);