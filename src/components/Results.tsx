import React from "react";

interface ResultProps {
  playerChoice: string | null;
  computerChoice: string | null;
  result: string | null;
}

const Results: React.FC<ResultProps> = ({
  playerChoice,
  computerChoice,
  result,
}) => {
  return (
    <div>
      {playerChoice && computerChoice && result && (
        <div>
        <div className="mt-5 grid grid-cols-2">
          <p>your move: {playerChoice}</p>
          <p>bot's move: {computerChoice}</p>
          </div>
        <span className="text-center">
        <p className="mt-5 text-xl text-success">{result}</p>
        </span>
        </div>
      )}
    </div>
  );
};

export default Results;
