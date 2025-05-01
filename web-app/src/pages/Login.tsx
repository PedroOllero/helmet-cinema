import React from "react";
import { EmptyLoginCredentials } from "../types/user";

const Login: React.FC = () => {
  const [loginCredential, setLoginCredential] = React.useState(EmptyLoginCredentials);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredential({
      ...loginCredential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredential),
    });

    if (response.status === 200) {
      window.location.href = "/profile";
    } else {
      const data = await response.json();
      alert("Login failed: " + data.error);
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
