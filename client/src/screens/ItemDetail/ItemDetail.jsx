import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../../services/items";

export default function ItemDetail() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line
  }, []);

  const fetchItem = async () => {
    const item = await getItem(id);
    console.log(item);
    setItem(item);
  };

  return (
    <>
      <div className="product-container">
        <div className="ProductCard">
          <div className="product-card-image">
            <img className="product-img" src={item.img_url} alt={item.title} />
          </div>
          <div className="product-card-info">
            <h4>{`Title: ${item.title}`}</h4>
            <p>{`Description: ${item.long_description}`}</p>
            <p>{`Price: $${item.price}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
