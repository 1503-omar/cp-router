import React, { useState } from "react";

import { moviesData } from "./component/MoviesData";
import Main from "./component/Main";
import { Route, Switch } from "react-router-dom";
import Trailler from "./component/Trailler"
import Header from "./component/Header/Header";
import About from "./component/MovieCard/About"
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [myInput, setMyInput] = useState("");
  const [myRate, setMyRate] = useState(0);

  const AddNewMovie = (x) => { setMovies([...movies, x]) }

  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/">
          <Main
            movies={movies.filter(
              (el) =>
                el.name.toLowerCase().includes(myInput.toLowerCase().trim()) &&
                el.rating >= myRate
            )}
            AddNewMovie={AddNewMovie}
          />
        </Route>

        <Route path="/About" component={About} />
        <Route path="/description/:name" render={(props) => <Trailler {...props} movies={movies} />} />

      </Switch>


    </div>
  );
}

export default App;