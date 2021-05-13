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
    // eslint-disable-next-line
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
    <div className="edit-item-container">
      <form className="user-edit-item-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title..."
          onChange={handleChange}
        />
        <br></br>
        <label>Image Address</label>
        <input
          type="text"
          name="img_url"
          value={img_url}
          placeholder="Enter img_url..."
          onChange={handleChange}
        />
        <br></br>
        <label>Short Description</label>
        <input
          className="user-edit-item-form-short"
          type="text"
          name="short_description"
          value={short_description}
          placeholder="Enter short_description..."
          onChange={handleChange}
        />
        <br></br>
        <label>Long Description</label>
        <input
          id="user-edit-item-form-long"
          type="text"
          name="long_description"
          value={long_description}
          placeholder="Enter long_description..."
          onChange={handleChange}
        />
        <br></br>
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Enter price..."
          onChange={handleChange}
        />
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}
