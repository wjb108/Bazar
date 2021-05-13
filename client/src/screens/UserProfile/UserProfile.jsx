import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../services/users";
import { deleteItem } from "../../services/items";
import "./UserProfile.css";

export default function UserProfile(props) {
  const { currentUser, setToggle } = props;
  const [userProfile, setUserProfile] = useState({});
  const [updateProfile, setUpdateProfile] = useState(false);

  useEffect(() => {
    if (currentUser) {
      fetchUser();
    }
    // eslint-disable-next-line
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
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-text">
          <h1>My Bazar Items</h1>
        </div>
        <div className="profile-header-button">
          <Link to="/new/item">
            <button>Create New Item</button>
          </Link>
        </div>
      </div>

      {userProfile.items &&
        userProfile.items.map((item) => {
          return (
            <div className="profile-card-container" key={item.id}>
              <div className="profile-card">
                <div className="profile-card-image">
                  <img
                    className="profile-img"
                    src={item.img_url}
                    alt={item.title}
                  />
                </div>
                <div className="profile-card-info">
                  <h4>{`Title: ${item.title}`}</h4>
                  <p>{`Info: ${item.short_description}`}</p>
                  <div className="profile-card-buttons">
                    <Link to={`/items/${item.id}`}>
                      <button>More Info</button>
                    </Link>
                    <Link to={`/edit/item/${item.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
