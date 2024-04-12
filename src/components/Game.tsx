import React, { useState } from "react";
import Results from "./Results";
import Button from "./Button";
import Card from "./Card";

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const choices = ["rock", "paper", "scissor"];

  function evaluateResult(playerChoice: string, computerChoice: string) {
    if (playerChoice === computerChoice) {
      setResult("It's a tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  }

  const playGame = (playerChoice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    evaluateResult(playerChoice, computerChoice);
  };

  return (
    <div>
      <div>
        {choices.map((choice) => (
          <Button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </Button>
        ))}
      </div>
      <div className="flex justify-center">
        <Card choice={playerChoice} />
        <Card choice={computerChoice} />
      </div>
      <Results
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
      />
    </div>
  );
};

export default Game;
