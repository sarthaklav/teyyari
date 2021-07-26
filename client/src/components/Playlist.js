import { usePlaylist } from "../contexts/playlist-context";
import { Link } from "react-router-dom";
export function Playlist() {
  const { playlistState } = usePlaylist();
  return (
    <div style={{ display: "flex" }}>
      {playlistState.watchLater.map((item) => {
        return (
          <div
            style={{
              border: "1px solid grey",
              margin: "1rem",
              width: "280px",
            }}
            key={item.id}
          >
            <Link to={`/videos/${item.id}`}>
              <img src={item.thumbnail} alt="" />
              <div>
                <h4> {item.name}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
