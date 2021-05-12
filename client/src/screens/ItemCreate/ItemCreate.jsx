import "./ItemCreate.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { postItem } from "../../services/items";

export default function ItemCreate(props) {
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

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = await postItem(formData);
    console.log(newItem);
    setFormData(newItem);
    props.setToggle((prevState) => !prevState);
    history.push("/profile");
  };

  return (
    <div className="create-item-container">
      <form onSubmit={handleSubmit} className="user-create-item-form">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title..."
          onChange={handleChange}
        />
        <label>Image Address</label>
        <input
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Enter https://..."
          onChange={handleChange}
        />
        <label>Short Description</label>
        <input
          type="text"
          name="short_description"
          value={short_description}
          placeholder="Enter description..."
          onChange={handleChange}
        />
        <label>Long Description</label>
        <input
          type="text"
          name="long_description"
          value={long_description}
          placeholder="Enter description..."
          onChange={handleChange}
        />
        <label>Price</label>
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
