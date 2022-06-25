import React from "react"
import '../stylesheets/NavBar.css'


const NavBar1 = () => {

  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://localhost:3000/home">
          <img src="OverSight-Logo.png" alt="Logo" width="24px" height="24px" class="logo" /> verSight
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='btns'>
            <li class="nav-item">
              <a class="btn btn-outline-primary" aria-current="page" href="http://localhost:3000/about" id="about">About</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-info" href="http://localhost:3000/home" tabindex="-1" aria-disabled="true" id="cancel">Cancel</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}

export default NavBar1

