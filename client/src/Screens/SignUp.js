import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/service";

const SignUp = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("api/createuser", {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
    });

    if (!response.data.success) {
      alert("Enter valid credentials");
    }

    if(response.data.success){
      navigate('/login')
    }
  };

  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              id="exampleInputPassword1"
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              id="exampleCheck1"
              onChange={onchange}
            />
          </div>
          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a User?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
