import React, { useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import { fetchPopularData } from "../apis/index";
import { Store, ActionType } from "../store/index";
import VideoGrid from "../components/videoGrid/VideoGrid";
import VideoGridItem from "../components/videoGridItem/VideoGridItem";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((res) => {
      setGlobalState({
        type: ActionType.SET_POPULAR,
        payload: { ...globalState, popular: res.data.items },
      });
    });
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((popularVideo) => (
            <VideoGridItem
              id={popularVideo.id}
              key={popularVideo.id}
              src={popularVideo.snippet.thumbnails.medium.url}
              title={popularVideo.snippet.title}
            />
          ))}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
