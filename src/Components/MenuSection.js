import React, { useState } from 'react'
import MenusCard from './MenusCard'
const image = require("../images/TATA1mg.webp")
const image1 = require("../images/1669400288-0753.avif")

function MenuSection() {
  // https://www.1mg.com/categories/fitness-supplements-5
  const [ItemsData, setItemsData] = useState([
    {
      image: image,
      title: "Tata 1mg Multivitamin Supreme",
      description: "Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health"
    },
    {
      image: image1,
      title: "Tata 1mg Multivitamin Supreme",
      description: "Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health"
    }
  ])


  return (
    <section id="menu" class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1>Explore Our Medicines</h1>
            <p>
              Medicine is the restoration of discordant elements, sickness is the discord of the elements infused into the living body.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <ul
          class="nav nav-pills mb-4 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              All Items
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-breakfast-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-breakfast"
              type="button"
              role="tab"
              aria-controls="pills-breakfast"
              aria-selected="true"
            >
              Breakfast
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-lunch-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-lunch"
              type="button"
              role="tab"
              aria-controls="pills-lunch"
              aria-selected="true"
            >
              Lunch
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-dinner-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-dinner"
              type="button"
              role="tab"
              aria-controls="pills-dinner"
              aria-selected="true"
            >
              Dinner
            </button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              {ItemsData.map(el =>
                <MenusCard imagePath={el.image} title={el.title} description={el.description}></MenusCard>)}


            </div>
          </div>

          <div
            class="tab-pane fade show"
            id="pills-breakfast"
            role="tabpanel"
            aria-labelledby="pills-breakfast-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_2.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_3.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_4.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_8.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade show"
            id="pills-lunch"
            role="tabpanel"
            aria-labelledby="pills-lunch-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_2.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_3.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_7.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_8.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade show"
            id="pills-dinner"
            role="tabpanel"
            aria-labelledby="pills-dinner-tab"
            tabindex="0"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_2.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_3.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_4.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="menu-item bg-white shadow-on-hover">
                  <img src={require("../images/item_8.jpg")} alt="" />
                  <div class="menu-item-content p-4">
                    <div>
                      <span>Rated(5.4)</span>
                      <span class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <h5 class="mt-1 mb-2">
                      <a href="#">Fudgy Chewy Brownies</a>
                    </h5>
                    <p class="small">
                      Baked salmon to a fresh salad made with chickpeas,
                      arugula, herbs and olives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default MenuSection