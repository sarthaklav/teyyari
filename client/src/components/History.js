import React from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../contexts/playlist-context";

export function History() {
  const { playlistState } = usePlaylist();
  if (playlistState.history.length === 0) {
    return (
      <div>
        Your history is empty. Go watch <Link to="/videos"> something</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "auto" }}>
      {playlistState.history.map((item) => (
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
              <h4>{item.name}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
