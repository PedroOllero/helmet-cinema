import React from "react";
import { EmptyCredentials } from "../types/user";

const Register: React.FC = () => {
  const [error, setError] = React.useState("");
  const [credentials, setCredentials] = React.useState(EmptyCredentials);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.status === 201) {
      window.location.href = "/login";
    } else {
      const data = await response.json();
      setError(data.message);
    }
  }

  return (
    <div className="flex flex-col min-h-[91dvh] bg-red-600 justify-center items-center">
      <h1 className="text-4xl font-bold text-center py-4 my-8">
        Regist quickly!
      </h1>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <div className="w-90 flex flex-col gap-2">
          <label className="text-xl">Name</label>
          <input
            type="text"
            className="text-input-standard"
            name="name"
            onChange={handleFieldChange}
          />
        </div>
        <div className="w-90 flex flex-col gap-2">
          <label className="text-xl">Email</label>
          <input
            type="text"
            className="text-input-standard"
            name="email"
            onChange={handleFieldChange}
          />
        </div>
        <div className="w-90 flex flex-col gap-2">
          <label className="text-xl">Password</label>
          <input
            type="text"
            className="text-input-standard"
            name="password"
            onChange={handleFieldChange}
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-red-400 hover-standard">Submit</button>
      </form>
    </div>
  );
};

export default Register;
