import React, { useState } from "react";
import API from '../UTILS/API';
import { useNavigate } from "react-router-dom";
import Navbar from "../component/navbar";


const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  })


  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }



  function submitUser(e) {
    e.preventDefault();

  let parsedId = parseInt(user.id)

  API.getOneById(parsedId).then(res => {
    console.log(res)
    navigate("/profile/"+res.data.id)
  })


 API.getOneByUsername({username: user.username, password: user.password}).then(res => {
  console.log(res);
  localStorage.setItem("userToken", JSON.stringify(res.data))
  navigate("/profile")
 })


  
}
  return (
    <div>
    <form onSubmit={submitUser} class="container">
      <Navbar/>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        {/* <div className="custom-control custom-checkbox">
          <input
            onChange={handleChange}
            name="username"
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div> */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">

            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
