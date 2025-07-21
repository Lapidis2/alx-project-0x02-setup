import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="w-full bg-blue-500 p-4 rounded-lg shadow-md ">
      <h2 >{title}</h2>
      <p >{content}</p>
    </div>
  );
};
export default Card;
