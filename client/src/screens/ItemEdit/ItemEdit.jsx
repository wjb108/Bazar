import "./ItemEdit.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem, updatedItem } from "../../services/items";

export default function ItemEdit(props) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    long_description: "",
    img_url: "",
    price: 0,
  });

  const history = useHistory();

  const { title, short_description, long_description, img_url, price } =
    formData;

  useEffect(() => {
    retrieveItem();
  }, []);

  const retrieveItem = async () => {
    const newItem = await getItem(id);
    console.log(newItem);
    setFormData(newItem);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = await updatedItem(id, formData);
    console.log(newItem);
    setFormData(newItem);
    props.setToggle((prevState) => !prevState);
    history.push("/profile");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title..."
          onChange={handleChange}
        />
        <label>img_url</label>
        <input
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Enter img_url..."
          onChange={handleChange}
        />
        <label>short_description</label>
        <input
          type="text"
          name="short_description"
          value={short_description}
          placeholder="Enter short_description..."
          onChange={handleChange}
        />
        <label>long_description</label>
        <input
          type="text"
          name="long_description"
          value={long_description}
          placeholder="Enter long_description..."
          onChange={handleChange}
        />
        <label>price</label>
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Enter price..."
          onChange={handleChange}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}
