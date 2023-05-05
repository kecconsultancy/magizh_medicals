import React, { useState } from 'react'

function Navbar() {
  const [isLogin, setisLogin] = useState(false);
  const ShowLogin = (e) => {
    // console.log("Show Login");
    setisLogin(true)
  }
  const ShowPlaceOrder = (e) => {
    // console.log("Show place order");
    setisLogin(false)
  }
  return (
    <nav class="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          MAGIZH MEDICALS
          {/* <img src={require("../images/medicals.png")} alt="" /> */}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">

            <li class="nav-item">
              <a class="nav-link" href="#heroSlider">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reservation">Reviews</a>
            </li>

          </ul>
          {!isLogin ? <div onClick={ShowLogin} class="btn btn-brand">Login</div> : <div onClick={ShowPlaceOrder} class="btn btn-brand">Place order</div>}

        </div>
      </div>
    </nav>
  )
}

export default Navbar