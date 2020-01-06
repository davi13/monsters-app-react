import React from "react";
import { Card } from "../card/card.component";
import "./card-list.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Card key={index} monsters={monster} />
      ))}
    </div>
  );
};
