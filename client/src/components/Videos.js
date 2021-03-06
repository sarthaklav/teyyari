import videos from "../data";
import { Link } from "react-router-dom";
import { usePlaylist } from "../contexts/playlist-context";
import { Aside } from "./Aside";
export function Videos() {
  const { playlists, playlistDispatch } = usePlaylist();
  return (
    <div>
      <Aside />
      <div style={{ display: "flex", flexWrap: "wrap", padding: "auto" }}>
        {videos.map((item) => {
          return (
            <div
              style={{
                border: "1px solid grey",
                margin: "1rem",
                width: "280px",
              }}
              key={item.id}
            >
              <Link
                to={`/videos/${item.id}`}
                onClick={() =>
                  playlistDispatch({ type: "ADD_TO_HISTORY", payload: item })
                }
              >
                <img src={item.thumbnail} alt="" />
                <div>
                  <h4> {item.name}</h4>
                </div>
              </Link>
              {playlists.map((playlistName) => (
                <button
                  onClick={() =>
                    playlistDispatch({
                      type: "ADD_TO_PLAYLIST",
                      payload: item,
                      playlistName: playlistName,
                    })
                  }
                  key={playlists.indexOf(item)}
                >
                  testing add {playlistName}
                </button>
              ))}
              {/* <button
            onClick={() =>
              playlistDispatch({
                type: "ADD_TO_PLAYLIST",
                payload: item,
                playlistName: "",
              })
            }
          >
            Add to watchlater
          </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
