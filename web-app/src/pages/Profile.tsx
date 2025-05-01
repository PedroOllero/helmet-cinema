import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("profile",res);
      console.log("token",token);

      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        console.log(data.user);
      } else {
        console.error(data);
      }
    };

    console.log("user",user);

    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;