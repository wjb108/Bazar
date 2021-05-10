import React from "react";

export default function Card(props) {
  const { title, short_desc, price, long_desc, img_url } = props;
  return (
    <div>
      <h4>{title}</h4>
      <img src={img_url} alt={title} />
      <p>{short_desc}</p>
    </div>
  );
}
