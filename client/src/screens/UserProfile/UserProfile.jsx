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
  };
  return (
    <div>
      <Link to="/items/new">
        <button>Create New Item</button>
      </Link>
    </div>
  );
}
