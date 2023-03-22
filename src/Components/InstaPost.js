import React from 'react'

function InstaPost() {
  return (
    <div class="row g-0">
      <div class="col-lg-3 col-sm-6">
        <div class="insta-post">
          <img src={require("../images/insta_post01.jpg")} alt="" />
          <a href="#" class="insta-btn">
            <i class="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="insta-post">
          <img src={require("../images/insta_post02.jpg")} alt="" />
          <a href="#" class="insta-btn">
            <i class="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="insta-post">
          <img src={require("../images/insta_post03.jpg")} alt="" />
          <a href="#" class="insta-btn">
            <i class="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="insta-post">
          <img src={require("../images/insta_post04.jpg")} alt="" />
          <a href="#" class="insta-btn">
            <i class="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default InstaPost