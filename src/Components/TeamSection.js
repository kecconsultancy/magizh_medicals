import React from 'react'

function TeamSection() {
  return (
    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1>Our Team Members</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sint temporibus natus optio eveniet nobis accusantium?
            </p>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-lg-3 col-sm-6">
            <div
              class="team-member px-4 py-5 border shadow-on-hover text-center"
            >
              <img src={require("../images/team_01.png")} alt="" />
              <div class="team-member-content">
                <h4 class="mb-0 mt-4">Jon Doe</h4>
                <p class="mb-0">Main Chef</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              class="team-member px-4 py-5 border shadow-on-hover text-center"
            >
              <img src={require("../images/team_02.png")} alt="" />
              <div class="team-member-content">
                <h4 class="mb-0 mt-4">Jon Doe</h4>
                <p class="mb-0">Main Chef</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              class="team-member px-4 py-5 border shadow-on-hover text-center"
            >
              <img src={require("../images/team_03.png")} alt="" />
              <div class="team-member-content">
                <h4 class="mb-0 mt-4">Jon Doe</h4>
                <p class="mb-0">Main Chef</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              class="team-member px-4 py-5 border shadow-on-hover text-center"
            >
              <img src={require("../images/team_01.png")} alt="" />
              <div class="team-member-content">
                <h4 class="mb-0 mt-4">Jon Doe</h4>
                <p class="mb-0">Main Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection