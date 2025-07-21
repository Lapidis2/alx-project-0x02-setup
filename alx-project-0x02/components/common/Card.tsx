import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className=" bg-blue-500 p-4 rounded-lg shadow-md text-2xl">
      <h2 >{title}</h2>
      <p >{content}</p>
    </div>
  );
};
export default Card;
