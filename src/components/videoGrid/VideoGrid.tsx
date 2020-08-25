import React from "react";
import Styles from "./videoGrid.module.scss";

const VideoGrid = ({ children }: any) => {
  return <div className={Styles.container}>{children}</div>;
};

export default VideoGrid;
