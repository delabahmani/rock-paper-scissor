import React from "react";

interface CardProps {
  choice: string | null;
}

const Card: React.FC<CardProps> = ({ choice }) => {
  const getImageUrl = (choice: string | null) => {
    switch (choice) {
      case "rock":
        return "/rock.png";
      case "paper":
        return "/paper.png";
      case "scissor":
        return "/scissors.png";
      default:
        return "/ready.png";
    }
  };


  return (
    <div>
      {choice && <img src={getImageUrl(choice)} alt={choice} style={{width: 150, height: 150 }} />}
    </div>
  )
};

export default Card;
