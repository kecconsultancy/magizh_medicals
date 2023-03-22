import React from 'react'

function BlogPost() {
  return (
    <section id="blog">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1>Blog Posts</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sint temporibus natus optio eveniet nobis accusantium?
            </p>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-sm-6">
            <div class="blog-post d-flex shadow-on-hover">
              <img src={require("../images/item_8.jpg")} alt="" />
              <div class="blog-post-content p-4">
                <p>osted: 25 Dec, 2018</p>
                <h4><a href="#">How to make delicious food </a></h4>
                <p>
                  Consectetur adipisicing elit. Consequatur, architecto
                  quisquam. Cumque!
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="blog-post d-flex shadow-on-hover">
              <img src={require("../images/item_6.jpg")} alt="" />
              <div class="blog-post-content p-4">
                <p>osted: 25 Dec, 2018</p>
                <h4><a href="#">How to make delicious food </a></h4>
                <p>
                  Consectetur adipisicing elit. Consequatur, architecto
                  quisquam. Cumque!
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="blog-post d-flex shadow-on-hover">
              <img src={require("../images/item_7.jpg")} alt="" />
              <div class="blog-post-content p-4">
                <p>osted: 25 Dec, 2018</p>
                <h4><a href="#">How to make delicious food </a></h4>
                <p>
                  Consectetur adipisicing elit. Consequatur, architecto
                  quisquam. Cumque!
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="blog-post d-flex shadow-on-hover">
              <img src={require("../images/item_3.jpg")} alt="" />
              <div class="blog-post-content p-4">
                <p>osted: 25 Dec, 2018</p>
                <h4><a href="#">How to make delicious food </a></h4>
                <p>
                  Consectetur adipisicing elit. Consequatur, architecto
                  quisquam. Cumque!
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost