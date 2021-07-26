import React, { useState, useEffect } from "react";
import axios from "axios";
import LoopIcon from "@material-ui/icons/Loop";
import "./Joke.css";

function Joke() {
  const url = "https://official-joke-api.appspot.com/random_joke";
  const [joke, setJoke] = useState(null);
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    if (click === true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setJoke(response.data);
    });
  }, [click]);

  if (joke) {
    return (
      <div className="joke">
        <h1 className="joke__title">Random Jokes</h1>
        <h1 className="joke__setup">{joke.setup}</h1>
        <h2 className="joke__punchline">{joke.punchline}</h2>
        <button onClick={handleOnClick} className="joke__button">
          New Joke
        </button>
      </div>
    );
  }

  return (
    <div className="spinner__logo">
      <LoopIcon className="loading__icon" />
    </div>
  );
}

export default Joke;
