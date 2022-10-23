// App Store Types
import { ReducerType } from "../types/general";
import { IVideoInitialState } from "../types/video.types";

const initialState: IVideoInitialState = {
  videos: [],
  savedFrames: []
};

const reducer: ReducerType<IVideoInitialState> = (state = initialState, action) => {
  switch (action.type) {
    case "VIDEOS": 
        return {
            ...state,
            videos: action.videos
        };
    case "FRAMES":
        return {
            ...state,
            savedFrames: action.savedFrames
        };
    default:
      return state;
  };
};

export default reducer;