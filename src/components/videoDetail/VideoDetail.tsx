import React, { useContext } from "react";
import { Store } from "../../store/index";
import VideoPlay from "../videoPlay/VideoPlay";
import Styles from "./videoDetail.module.scss";
import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState } = useContext(Store);

  return globalState.selected && globalState.selected.id ? (
    <div className={Styles.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>No Data</span>
  );
};

export default VideoDetail;
