import React, { useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import VideoDetail from "../components/videoDetail/VideoDetail";
import SideList from "../components/sideList/SideList";
import { Store, ActionType } from "../store/index";
import { useLocation } from "react-router-dom";
import { fetchSelectedData, fetchRelatedData } from "../apis/index";

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();

  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    if (id) {
      const [selected, related] = await Promise.all([
        fetchSelectedData(id),
        fetchRelatedData(id),
      ]);
      setGlobalState({
        type: ActionType.SET_SELECTED,
        payload: { ...globalState, selected: selected.data.items.shift() },
      });
      setGlobalState({
        type: ActionType.SET_RELATED,
        payload: { ...globalState, related: related.data.items },
      });
    }
  };

  useEffect(() => {
    setVideos();
  }, [location.search]);

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
};

export default Watch;
