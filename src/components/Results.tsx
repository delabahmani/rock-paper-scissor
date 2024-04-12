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
          <p>Your move: {playerChoice}</p>
          <p>Computer's move: {computerChoice}</p>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default Results;
