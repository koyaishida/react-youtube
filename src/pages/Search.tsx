import React, { useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import { useLocation } from "react-router-dom";
import { fetchSearchedData } from "../apis/index";
import { Store, ActionType } from "../store/index";
import VideoGrid from "../components/videoGrid/VideoGrid";
import VideoGridItem from "../components/videoGridItem/VideoGridItem";

const Search = () => {
  const location = useLocation();
  const { globalState, setGlobalState } = useContext(Store);

  const setSearchResult = () => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    fetchSearchedData(query).then((res) => {
      setGlobalState({
        type: ActionType.SET_SEARCHED,
        payload: { ...globalState, searched: res.data.items },
      });
    });
  };

  useEffect(() => {
    setSearchResult();
  }, [location.search]);

  return (
    <Layout>
      <VideoGrid>
        {globalState.searched &&
          globalState.searched.map((searchedVideo) => (
            <VideoGridItem
              id={searchedVideo.id.videoId}
              key={searchedVideo.id.videoId}
              src={searchedVideo.snippet.thumbnails.medium.url}
              title={searchedVideo.snippet.title}
            />
          ))}
      </VideoGrid>
    </Layout>
  );
};

export default Search;
