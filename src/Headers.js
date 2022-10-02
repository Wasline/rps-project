import React from "react";


export default function Header() {
   let Header = ({ score }) => {
 return (
    <div className="header">
      <div className="name">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
        <span>Lizard</span>
        <span>Spock</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box-score">{score}</div>
      </div>
    </div>
  );
}
};