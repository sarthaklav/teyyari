import videos from "../data";
import { Link } from "react-router-dom";
import { usePlaylist } from "../contexts/playlist-context";
export function Videos() {
  const { playlistDispatch } = usePlaylist();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "auto" }}>
      {videos.map((item) => {
        return (
          <div
            style={{
              border: "1px solid grey",
              margin: "1rem",
              width: "280px",
            }}
          >
            <Link to={`/videos/${item.id}`}>
              <img src={item.thumbnail} alt="" />
              <div>
                <h4> {item.name}</h4>
              </div>
            </Link>
            <button
              onClick={() =>
                playlistDispatch({
                  type: "ADD_TO_WATCHLATER",
                  payload: item,
                })
              }
            >
              Add to watchlater
            </button>
          </div>
        );
      })}
    </div>
  );
}
