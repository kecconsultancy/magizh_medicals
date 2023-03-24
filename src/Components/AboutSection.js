import React from 'react'

function AboutSection() {
  return (
    <section id="about">
      <div class="container">
        <div class="row gy-4 align-items-center">
          <div class="col-lg-5">
            <img src={require("../images/syringe-1884784_1920.jpg")} alt="" />
          </div>
          <div class="col-lg-5">
            <h1>About us</h1>
            <div class="divider my-4"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              nesciunt voluptates doloribus quidem. Dignissimos, asperiores
              molestias?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur adipisci velit corporis debitis blanditiis hic, ipsam
              magni exercitationem ullam quibusdam a ad!
            </p>
            <a href="#" class="btn btn-brand">Explore Menu</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection