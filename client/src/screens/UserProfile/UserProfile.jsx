import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../services/users";
import { deleteItem } from "../../services/items";

export default function UserProfile(props) {
  const { currentUser, setToggle } = props;
  const [userProfile, setUserProfile] = useState({});
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    if (currentUser) {
      fetchUser();
    }
  }, [currentUser, updateProfile]);

  const fetchUser = async () => {
    const user = await getUser(currentUser.id);
    console.log(user);
    setUserProfile(user);
  };

  async function handleDelete(id) {
    await deleteItem(id);
    setUpdateProfile((prevState) => !prevState);
    setToggle((prevState) => !prevState);
  }

  return (
    <div>
      <h1>My Bazar Items</h1>

      {userProfile.items &&
        userProfile.items.map((item) => {
          return (
            <div className="bazar-card" key={item.id}>
              <div className="bazar-card-image">
                <img
                  className="bazar-img"
                  src={item.img_url}
                  alt={item.title}
                />
              </div>
              <div className="bazar-card-info">
                <h4>{`Title: ${item.title}`}</h4>
                <p>{`Info: ${item.short_description}`}</p>
                <Link to={`/items/${item.id}`}>
                  <button>More Info</button>
                </Link>
                <Link to={`/edit/item/${item.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      <Link to="/new/item">
        <button>Create New Item</button>
      </Link>
    </div>
  );
}
