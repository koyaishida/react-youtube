import axios from "axios";
const KEY = "AIzaSyBFYxIV0ryXQhbKdC9LyZ4aZoKq4H67kUs";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const params = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
};

export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostPopular",
    },
  });
};

export const fetchSelectedData = async (id: string | null) => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      id,
    },
  });
};

export const fetchRelatedData = async (id: string | null) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoId: id,
    },
  });
};

export const fetchSearchedData = async (term: string | null) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      q: term,
    },
  });
};
