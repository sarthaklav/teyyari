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

const history = [];

function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        [action.playlistName]: [...state[action.playlistName], action.payload],
      };
    case "CREATE_PLAYLIST":
      return { ...state, [action.payload]: [] };

    case "ADD_TO_HISTORY":
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
}

export function PlaylistProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(reducerFunc, {
    watchLater,
    history,

    // playlists: [
    //   {
    //     playlistId: "124",
    //     playlistVideos: [{}, {}, {}],
    //     type: private / public,
    //   },
    // ],
    //better way to do that
    // playlist :{ name :"Play list name", videosInPlaylist:[],   }  wrong
  });
  console.log(`from line 28 playlist-context.js`);
  console.log(playlistState);
  console.log(typeof playlistState);
  const playlists = Object.keys(playlistState);
  return (
    <PlaylistContext.Provider
      value={{
        playlist: "from playlist context",
        playlistState,
        playlistDispatch,
        playlists,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}
