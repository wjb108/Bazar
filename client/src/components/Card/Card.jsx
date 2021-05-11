import React from "react";
import "./Card.css";

export default function Card(props) {
  const { title, short_desc, price, long_desc, img_url } = props;
  return (
    <div className="bazar-card">
      <h4>{title}</h4>
      <img className="bazar-card-img" src={img_url} alt={title} />
      <p>{short_desc}</p>
    </div>
  );
}
