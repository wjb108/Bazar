import { Link } from "react-router-dom";
import "./ItemsGallery.css";

export default function ItemsContainer(props) {
  const { allItems } = props;

  return (
    <div>
      <h1>Bazar Items</h1>
      {allItems.map((item) => (
        <div className="bazar-container" key={item.id}>
          <img src={item.img_url} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.short_description}</p>
          <Link to={`/items/${item.id}`}>
            <button>More Info</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
