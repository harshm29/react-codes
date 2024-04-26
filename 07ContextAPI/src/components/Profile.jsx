import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { User } = useContext(UserContext);

  if (!User) return <div>Please login </div>;

  return (
    <div>
      <h2>Profile</h2>

      <h3>Welcome, {User?.username ? User?.username : ""}</h3>
    </div>
  );
};

export default Profile;
