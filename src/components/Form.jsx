import React, { useState } from "react";

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const [errorColor, setErrorColor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrorMessage = {};
    const newErrorColor = {};
    // username condition
    if (userData.username.length >= 8) {
      newErrorColor.username = "border-2 border-lime-400 outline-lime-400";
      newErrorMessage.username = "";
    } else {
      newErrorColor.username = "border-2 border-red-400 outline-red-400";
      newErrorMessage.username = "User name must be at least 8";
    }

    // email condition
    if (userData.email.includes("@gmail")) {
      newErrorColor.email = "border-2 border-lime-400 outline-lime-400";
      newErrorMessage.email = "";
    } else {
      newErrorColor.email = "border-2 border-red-400 outline-red-400";
      newErrorMessage.email = "Email must inludces (@gmail)";
    }

    // password codition
    if (userData.password.length >= 8) {
      newErrorColor.password = "border-2 border-lime-400 outline-lime-400";
      newErrorMessage.password = "";
    } else {
      newErrorColor.password = "border-2 border-red-400 outline-red-400";
      newErrorMessage.password = "password have to be at least 8";
    }

    // password confirm condition
    if (
      userData.confirmedPassword === userData.password &&
      userData.confirmedPassword
    ) {
      newErrorColor.confirmedPassword =
        "border-2 border-lime-400 outline-lime-400";
      newErrorMessage.confirmedPassword = "";
    } else {
      newErrorColor.confirmedPassword =
        "border-2 border-red-400 outline-red-400";
      newErrorMessage.confirmedPassword = "password is not correct";
    }

    setErrorMessage(newErrorMessage);
    setErrorColor(newErrorColor);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col border-2 border-gray-200 w-[400px] gap-6 bg-white shadow-xl rounded-lg p-10"
        >
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="absolute top-0 right-6 cursor-pointer text-3xl"
          >
            x
          </button>
          <h1 className="text-xl font-bold text-center">login</h1>
          <div>
            <input
              type="text"
              name="username"
              value={userData.username}
              placeholder="Username*"
              onChange={handleChange}
              className={`w-full bg-gray-50 px-4 py-2 rounded-md ${errorColor.username} focus:outline-3`}
            />{" "}
            <br />
            <span className="text-red-400">{errorMessage.username}</span>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={userData.email}
              placeholder="Email*"
              onChange={handleChange}
              className={`w-full bg-gray-50 px-4 py-2 rounded-md ${errorColor.email} focus:outline-3`}
            />{" "}
            <br />
            <span className="text-red-400">{errorMessage.email}</span>
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={userData.password}
              placeholder="password*"
              onChange={handleChange}
              className={`w-full bg-gray-50 px-4 py-2 rounded-md ${errorColor.password} focus:outline-3`}
            />{" "}
            <br />
            <span className="text-red-400">{errorMessage.password}</span>
          </div>

          <div>
            <input
              type="password"
              name="confirmedPassword"
              value={userData.confirmedPassword}
              placeholder="Confirm Password*"
              onChange={handleChange}
              className={`w-full bg-gray-50 px-4 py-2 rounded-md ${errorColor.confirmedPassword} focus:outline-3`}
            />{" "}
            <br />
            <span className="text-red-400">
              {errorMessage.confirmedPassword}
            </span>
          </div>

          <button
            type="submit"
            className="font-bold px-6 py-2 rounded-md bg-teal-600 text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="flex flex-col text-gray-700 gap-6">
          <h1 className="text-xl font-extrabold text-center">Login here</h1>
          <button
            className="font-bold px-6 py-2 rounded-md bg-teal-600 text-white cursor-pointer"
            onClick={() => setShowForm((prev) => !prev)}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
