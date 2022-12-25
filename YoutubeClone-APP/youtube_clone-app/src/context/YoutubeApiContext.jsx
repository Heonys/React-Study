import { createContext, useContext } from "react";
import getFakeYouTubeApi from "api/getFakeYouTubeApi";

const youtubeApiContext = createContext();
const youtubeApi = new getFakeYouTubeApi();

export const YoutubeApiProvider = ({ children }) => {
  return <youtubeApiContext.Provider value={{ youtubeApi }}>{children}</youtubeApiContext.Provider>;
};

export const useYoutubeApi = () => {
  return useContext(youtubeApiContext);
};
