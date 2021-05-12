import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../services/users";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const user = await getUser(id);
    console.log(user);
    setUserProfile(user);
    // console.log(userProfile);
  };

  return (
    <div>
      <h1>My Bazar Items</h1>

      {/* <Link to="/new/item">
        <button>Create New Item</button>
      </Link> */}
      {userProfile &&
        userProfile.items.map((item) => {
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
          </div>;
        })}
    </div>
  );
}
