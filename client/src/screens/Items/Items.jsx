import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./Item.css";

export default function Items(props) {
  const { allItems } = props;
  return (
    <div>
      <h1>Bazar Items</h1>
      {allItems.map((item) => (
        <div className="bazar-container" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <Card
              title={item.title}
              short_desc={item.short_description}
              price={item.price}
              long_desc={item.long_description}
              img_url={item.img_url}
            />
          </Link>
        </div>
      ))}
      <Link to>
        <button>More Details</button>
      </Link>
    </div>
  );
}
