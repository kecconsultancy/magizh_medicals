import React from 'react'

function ReviewSection() {
  return (
    <section id="reviews" class="bg-cover">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1 class="text-white">Our Client Saying</h1>
            <p class="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sint temporibus natus optio eveniet nobis accusantium?
            </p>
          </div>
        </div>

        <div id="reviewSlider" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#reviewSlider"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#reviewSlider"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="review bg-white p-5 text-center">
                    <div class="quote-icon">
                      <i class="ri-double-quotes-l"></i>
                    </div>
                    <p class="mb-0">
                      There are many variations of passages of have suffered
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use a passage of Lorem Ipsum, you need to be
                      sure there isn't
                    </p>
                    <div class="person mt-4">
                      <img src={require("../images/avatar_01.jpg")} alt="" />
                      <h4 class="mb-0 mt-2">Jon Doe</h4>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="review bg-white p-5 text-center">
                    <div class="quote-icon">
                      <i class="ri-double-quotes-l"></i>
                    </div>
                    <p class="mb-0">
                      There are many variations of passages of have suffered
                      alteration in some form, by injected humour, or randomised
                      words which don't look even slightly believable. If you
                      are going to use a passage of Lorem Ipsum, you need to be
                      sure there isn't
                    </p>
                    <div class="person mt-4">
                      <img src={require("../images/avatar_02.jpg")} alt="" />
                      <h4 class="mb-0 mt-2">Jon Doe</h4>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#reviewSlider"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#reviewSlider"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

  )
}

export default ReviewSection