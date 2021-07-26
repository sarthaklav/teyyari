import { createContext, useContext, useReducer } from "react";
import faker from "faker";
faker.seed(123);
const PlaylistContext = createContext();
const watchLater = [
  {
    id: 1,
    name: "Kyu mehnga phone na le",
    thumbnail: faker.image.image(),
    video: "https://www.youtube.com/watch?v=CyHIuVRLDPY&ab_channel=MrTechpedia",
  },
];
function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TO_WATCHLATER":
      return { ...state, watchLater: [...state.watchLater, action.payload] };
    default:
      return state;
  }
}
export function PlaylistProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(reducerFunc, {
    watchLater,
  });
  return (
    <PlaylistContext.Provider
      value={{
        playlist: "from playlist context",
        playlistState,
        playlistDispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}
