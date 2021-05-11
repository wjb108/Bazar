import "./ItemDetail.css";

export default function ItemDetail(props) {
  const { allItems } = props;
  return (
    <div>
      {allItems.map((item) => (
        <div className="bazar-container" key={item.id}>
          <img src={item.img_url} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.short_description}</p>
        </div>
      ))}
    </div>
  );
}
