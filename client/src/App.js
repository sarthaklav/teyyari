import "./App.css";
import { Navbar } from "./components/Navbar";
import { Videos } from "./components/Videos";
import { Home } from "./components/Home";
import { Switch, Route } from "react-router-dom";
import { PlayVideo } from "./components/PlayVideo";
import { NoMatch } from "./components/NoMatch";
import { Playlist } from "./components/Playlist";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/videos/:videoId">
          <PlayVideo />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/playlists/:playlistName">
          <Playlist />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
