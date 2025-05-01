import React, { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate(); 

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/profile");
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="flex flex-col min-h-[91dvh] bg-red-400 justify-center items-center">
      <h1 className="text-4xl font-bold text-center py-3 my-8">Log in</h1>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <div className="w-90 flex flex-col gap-2">
          <label className="text-xl">Email</label>
          <input type="text" className="text-input-standard" name="email" onChange={handleFieldChange}/>
        </div>
        <div className="w-90 flex flex-col gap-2">
          <label className="text-xl">Password</label>
          <input type="text" className="text-input-standard" name="password" onChange={handleFieldChange} />
        </div>
        <button className="px-6 py-3 bg-red-600 hover-standard" >Submit</button>
      </form>
    </div>
  );
};

export default Login;
