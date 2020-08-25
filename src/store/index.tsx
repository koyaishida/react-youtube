import React, { createContext, useReducer } from "react";
import VideoData from "../video.json";
import SearchData from "../search.json";

const initialState = {
  popular: [
    {
      etag: "",
      id: "",
      kind: "",
      snippet: {
        categoryId: "",
        channelId: "",
        channelTitle: "",
        defaultAudioLanguage: "en",
        description: "",
        liveBroadcastContent: "none",
        localized: {
          description: "",
          title: "",
        },
        publishedAt: "",
        tags: ["", ""],
        thumbnails: {
          default: { url: "", width: 0, height: 0 },
          high: { url: "", width: 0, height: 0 },
          maxres: { url: "", width: 0, height: 0 },
          medium: { url: "", width: 0, height: 0 },
          standard: { url: "", width: 0, height: 0 },
        },
        title: "",
      },
    },
  ],
  selected: {
    etag: "",
    id: "",
    kind: "",
    snippet: {
      categoryId: "",
      channelId: "",
      channelTitle: "",
      defaultAudioLanguage: "en",
      description: "",
      liveBroadcastContent: "none",
      localized: {
        description: "",
        title: "",
      },
      publishedAt: "",
      tags: ["", ""],
      thumbnails: {
        default: { url: "", width: 0, height: 0 },
        high: { url: "", width: 0, height: 0 },
        maxres: { url: "", width: 0, height: 0 },
        medium: { url: "", width: 0, height: 0 },
        standard: { url: "", width: 0, height: 0 },
      },
      title: "",
    },
  },
  related: [
    {
      etag: "",
      id: {
        videoId: "",
        kind: "",
      },
      kind: "",
      snippet: {
        channelId: "",
        channelTitle: "",
        description: "",
        liveBroadcastContent: "",
        publishedAt: "",
        publishedTime: "",
        thumbnails: {
          default: {
            url: "",
            width: 0,
            height: 0,
          },
          high: { url: "", width: 0, height: 0 },
          maxres: {
            url: "",
            width: 0,
            height: 0,
          },
          medium: {
            url: "",
            width: 0,
            height: 0,
          },
          standard: {
            url: "",
            width: 0,
            height: 0,
          },
        },
        title: "",
      },
    },
  ],
  term: "",
  searched: [
    {
      etag: "",
      id: {
        videoId: "",
        kind: "",
      },
      kind: "",
      snippet: {
        channelId: "",
        channelTitle: "",
        description: "",
        liveBroadcastContent: "",
        publishedAt: "",
        publishedTime: "",
        thumbnails: {
          default: {
            url: "",
            width: 0,
            height: 0,
          },
          high: { url: "", width: 0, height: 0 },
          maxres: {
            url: "",
            width: 0,
            height: 0,
          },
          medium: {
            url: "",
            width: 0,
            height: 0,
          },
          standard: {
            url: "",
            width: 0,
            height: 0,
          },
        },
        title: "",
      },
    },
  ],
};

export type GlobalState = {
  popular: typeof VideoData[];
  selected: typeof VideoData;
  related: typeof SearchData[];
  term: string;
  searched: typeof SearchData[];
};

//要確認
export enum ActionType {
  SET_POPULAR = "SET_POPULAR",
  SET_SELECTED = "SET_SELECTED",
  SET_RELATED = "SET_RELATED",
  SET_TERM = "SET_TERM",
  SET_SEARCHED = "SET_SEARCHED",
}

type Action = {
  type: ActionType;
  payload: GlobalState;
};

const reducer: React.Reducer<GlobalState, Action> = (
  state: GlobalState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SET_POPULAR:
      return { ...state, popular: action.payload.popular };
    case ActionType.SET_SELECTED:
      return { ...state, selected: action.payload.selected };
    case ActionType.SET_RELATED:
      return { ...state, related: action.payload.related };
    case ActionType.SET_SEARCHED:
      return { ...state, searched: action.payload.searched };
    case ActionType.SET_TERM:
      return { ...state, term: action.payload.term };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: (action: Action): void => {},
});

const StoreProvider = ({ children }: any) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};

export default StoreProvider;
