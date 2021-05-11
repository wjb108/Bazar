import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../../services/items";

export default function ItemDetail() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const item = await getItem(id);
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <img src={item.img_url} alt={item.title} />
      <h4>{`Title: ${item.title}`}</h4>
      <p>{`Description: ${item.long_description}`}</p>
      <p>{`Price: ${item.price}`}</p>
    </div>
  );
}
