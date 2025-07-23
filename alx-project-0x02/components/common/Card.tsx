import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-emerald-50 p-6 bg-white hover:shadow-lg  transition mb-4 hover:scale-110">
      <h2 >{title}</h2>
      <p >{content}</p>
    </div>
  );
};
export default Card;
