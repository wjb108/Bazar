import { Link } from "react-router-dom";
import "./ItemsGallery.css";

export default function ItemsContainer(props) {
  const { allItems } = props;
  console.log(allItems);
  return (
    <>
      <h1>Bazar Items</h1>

      <div className="bazar-container">
        {allItems.map((item) => (
          <div className="bazar-card" key={item.id}>
            <div className="bazar-card-image">
              <img className="bazar-img" src={item.img_url} alt={item.title} />
            </div>
            <div className="bazar-card-info">
              <h4>{`Title: ${item.title}`}</h4>
              <p>{`Info: ${item.short_description}`}</p>
              <Link to={`/items/${item.id}`}>
                <button>More Info</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
