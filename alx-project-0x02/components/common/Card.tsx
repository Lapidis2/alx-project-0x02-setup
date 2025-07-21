import React from "react";
import { cardProps } from "../../interfaces";

const Card: React.FC<cardProps> = ({ title, content }) => {
  return (
    <div className=" bg-blue-500 p-4 rounded-lg shadow-md text-2xl">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};
export default Card;
