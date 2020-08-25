import React from "react";
import Header from "../header/Header";
import Styles from "./layout.module.scss";

const Layout = ({ children }: any) => {
  return (
    <div className={Styles.wrapper}>
      <Header />
      <div className={Styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
