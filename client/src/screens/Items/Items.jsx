import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

export default function Items(props) {
  const { allItems } = props;
  return (
    <div>
      {allItems.map((item) => (
        <React.Fragment key={item.id}>
          <Link to={`/items/${item.id}`}>
            <Card
              title={item.title}
              short_desc={item.short_description}
              price={item.price}
              long_desc={item.long_description}
              img_url={item.img_url}
            />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
