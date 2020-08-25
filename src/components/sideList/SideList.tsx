import React, { useContext } from "react";
import { Store } from "../../store";
import SideListItem from "../sideListItem/SideListItem";
import Styles from "./SideList.module.scss";

const SideList = () => {
  const { globalState } = useContext(Store);

  return (
    <div className={Styles.sidenav}>
      {globalState.related ? (
        globalState.related.map((video, index) => (
          <SideListItem
            id={video.id.videoId}
            key={index}
            src={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
          />
        ))
      ) : (
        <span>no data</span>
      )}
    </div>
  );
};

export default SideList;
