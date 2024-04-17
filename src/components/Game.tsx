import React, { useState } from "react";
import Results from "./Results";
import Button from "./Button";
import Card from "./Card";

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const choices = ["rock", "paper", "scissor"];

  function evaluateResult(playerChoice: string, computerChoice: string) {
    if (playerChoice === computerChoice) {
      setResult("it's a tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      setResult("you win!");
      setPlayerWins(playerWins + 1);
    } else {
      setResult("bot wins!");
      setComputerWins(computerWins + 1);
    }
  }

  const playGame = (playerChoice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    evaluateResult(playerChoice, computerChoice);
    setGameStarted(true);
  };

  const restartGame = (resetScore: boolean = false) => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    if (resetScore) {
      setPlayerWins(0);
      setComputerWins(0);
    }
    setGameStarted(false);
  };

  return (
    <div className="card mx-auto mt-24 h-[550px] w-[600px] place-items-center rounded-xl bg-[#FFFFFF] drop-shadow-2xl font-semibold">
      <div className="flex justify-center">
        <Card choice={playerChoice} />
        <Card choice={computerChoice} />
      </div>
      {!gameStarted && (
        <h1 className="my-5 text-center text-2xl">make the first move!</h1>
      )}
      <span className="mt-5 grid">
        <Results
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      </span>
      <div className="grid grid-cols-3">
        {choices.map((choice) => (
          <Button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </Button>
        ))}
      </div>
      {gameStarted && (
        <span className="my-5">
          <p className="text-xl">
            player wins: {playerWins} | bot wins: {computerWins}
          </p>
        </span>
      )}
      {gameStarted && (
        <button
          className="btn btn-accent mt-10"
          onClick={() => restartGame(true)}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default Game;
