import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, myChoice, setScore }) => {
  
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === house ) {
        setPlayerWin("IT'S A DRAW");
    } else if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("YOU WIN");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "Lizard") {
        setPlayerWin("YOU WIN");
        setScore(score + 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "Lizard") {
        setPlayerWin("win");
        setScore(score + 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "Spock") {
        setPlayerWin("win");
        setScore(score + 1);
    } else if (myChoice === "Spock" && house === "rock") {
        setPlayerWin("win");
        setScore(score + 1);
    } else if (myChoice === "Spock" && house === "scissors") {
          setPlayerWin("win");
          setScore(score + 1);
    } else if (myChoice === "Lizard" && house === "Spock") {
        setPlayerWin("win");
        setScore(score + 1);
    } else if (myChoice === "Lizard" && house === "paper") {
            setPlayerWin("win");
            setScore(score + 1);
    } else {
      setPlayerWin("YOU LOOSE");
      setScore(score - 1);
    }
  };

  useEffect(() => {
   Result();
  }, [house]);

  return (
    <div className="game">
      my choice:{myChoice} <br />
      House choice:{house} <br />
    
      Result:
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
    
      <Link to="/" onClick={() => setHouse()}>
        Play Again
      </Link>
    </div>
  );
};

export default Game;