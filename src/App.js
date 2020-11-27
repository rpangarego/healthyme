import "./App.css";
import Header from "./components/partials/Header";
import Home from "./components/Home";
import Exercises from "./components/Exercises";
import ExerciseDetails from "./components/ExerciseDetails";
import ExerciseStart from "./components/ExerciseStart";
import ExerciseCompleted from "./components/ExerciseCompleted";
import Foods from "./components/Foods";
import FoodDetails from "./components/FoodDetails";
import BMICalculator from "./components/BMICalculator";
import About from "./components/About";
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

            {/* exercises routes */}
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/exercises/:id" component={ExerciseDetails} />
            <Route
              exact
              path="/exercises/:id/start"
              component={ExerciseStart}
            />
            <Route
              exact
              path="/exercises/:id/completed"
              component={ExerciseCompleted}
            />

            {/* foods routes */}
            <Route exact path="/foods" component={Foods} />
            <Route exact path="/foods/:id/recipe" component={FoodDetails} />

            {/* bmi calculator route */}
            <Route exact path="/bmi-calculator" component={BMICalculator} />

            {/* about this app route */}
            <Route exact path="/about" component={About} />

            {/* Page not found/404 page */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
