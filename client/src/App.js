import "./App.css";
import { Navbar } from "./components/Navbar";
import { Videos } from "./components/Videos";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PlayVideo } from "./components/PlayVideo";
import { NoMatch } from "./components/NoMatch";
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

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
