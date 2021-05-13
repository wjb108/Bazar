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
    categories: "",
  });
  console.log(props.allCategories);
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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title..."
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="img_url">Image Address</label>
        <input
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Enter https://..."
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="short_description">Short Description</label>
        <input
          type="text"
          name="short_description"
          value={short_description}
          placeholder="Enter description..."
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="long_description">Long Description</label>
        <input
          type="text"
          name="long_description"
          value={long_description}
          placeholder="Enter description..."
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Enter price..."
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="categories">Category</label>
        <select
          value={formData.categories}
          name="categories"
          onChange={handleChange}
        >
          {props.allCategories.map((category) => (
            <option key={category.name} name="categories" value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}
