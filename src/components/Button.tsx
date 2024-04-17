import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn btn-primary mx-5 my-8">
      {children}
    </button>
  );
};

export default Button;
