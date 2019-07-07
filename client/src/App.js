import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Home from "./components/home.component";
import NotFound from "./components/notfound.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="*" component={NotFound} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;