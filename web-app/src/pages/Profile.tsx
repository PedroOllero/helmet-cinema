import { useEffect, useState } from "react";
import { getProfile } from "../services/getProfile";
const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile()
    .then((profile) => setUser(profile))
    .catch((error) => console.error("Error fetching user:", error));
    console.log(user)
  }, [user]);

  if (!user) return <p>Loading.....</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;