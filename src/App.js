import "./App.css";
import Header from "./components/partials/Header";
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import ExerciseDetails from "./components/ExerciseDetails";
import ExerciseStart from "./components/ExerciseStart";
import Foods from "./components/Foods";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/exercises/:id" component={ExerciseDetails} />
            <Route
              exact
              path="/exercises/:id/start"
              component={ExerciseStart}
            />
            <Route exact path="/foods" component={Foods} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
