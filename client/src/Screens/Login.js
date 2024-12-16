import React, {useContext, useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"

import { datacontext } from '../Components/Contextreducer';
import api from '../utils/service';

export default function Login (){

  let navigate = useNavigate()
  let json1;

  const [id, setid] = useContext(datacontext)

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(JSON.stringify({email: credentials.email, password: credentials.password}))
    const response = await api.post('/api/loginuser', {
      email: credentials.email,
      password: credentials.password,
    })
    
    if (!response.data.success) {
      alert("Enter valid credentials");
      return
    }
    if(response.data.success){
      localStorage.setItem("authToken", response.authToken)
      localStorage.setItem("email",credentials.email)
      localStorage.setItem("id",response.id)
      navigate("/");
    }
    
  };

  useEffect(() => {
    if (json1) {
      console.log(`i got my id`);
    }
  }, [id]);

  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          
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
          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            Register?
          </Link>
        </form>
      </div>
    </div>
  )
}
