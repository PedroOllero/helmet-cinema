const API_URL = import.meta.env.VITE_API_URL;

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("res", res);
  const data = await res.json();
  if (res.ok) {
    return data.user;
  } else {
    console.error(data);
  }
};
