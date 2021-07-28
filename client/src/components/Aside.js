import { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePlaylist } from "../contexts/playlist-context";

export function Aside() {
  const [createPlaylistForm, setCreatePlaylistForm] = useState();
  const [playlistName, setPlaylistName] = useState();
  const { playlists, playlistDispatch } = usePlaylist();

  console.log(playlists);
  return (
    <aside style={{}}>
      {playlists.map((item) => (
        <NavLink
          onClick={() =>
            playlistDispatch({ type: "TOGGLE_PLAYLIST", action: item })
          }
          to={`/playlists/${item}`}
          style={{ display: "block" }}
          key={playlists.indexOf(item)}
        >
          {" "}
          {item}
        </NavLink>
      ))}
      {!createPlaylistForm && (
        <button onClick={() => setCreatePlaylistForm((val) => !val)}>
          + Create Playlist{" "}
        </button>
      )}
      {createPlaylistForm && (
        <form
          onSubmit={(event) => {
            playlistDispatch({
              type: "CREATE_PLAYLIST",
              payload: playlistName,
            });
            event.preventDefault();
            console.log(`now we have to create :: ${playlistName}`);
            setCreatePlaylistForm((val) => !val);
          }}
        >
          <input
            type="text"
            onChange={(event) => setPlaylistName(event.target.value)}
          />
          <button type="submit">+</button>
        </form>
      )}
    </aside>
  );
}
