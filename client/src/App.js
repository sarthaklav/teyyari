import "./App.css";
import { Navbar } from "./components/Navbar";
import { Videos } from "./components/Videos";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PlayVideo } from "./components/PlayVideo";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
