import "./App.css";
import AnimeDetail from "./components/AnimeDetail";
import Favorite from "./components/Favorites";
import Home from "./pages/Home";
import NavigatorBar from "./components/NavigatorBar";
import store from "./store";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() { 
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavigatorBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/anime/:id" component={AnimeDetail} />
              <Route exact path="/favorites" component={Favorite} />
            </Switch>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
