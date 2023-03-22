import React from 'react'

function FooterSection() {
  return (
    <footer class="bg-cover">
      <div class="footer-top">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-4">
              <img src={require("../images/Qrispy_white.svg")} class="mb-4" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit architecto unde magnam.
              </p>
              <div class="social-links">
                <a href="#"><i class="ri-facebook-circle-fill"></i></a>
                <a href="#"><i class="ri-instagram-fill"></i></a>
                <a href="#"><i class="ri-youtube-fill"></i></a>
                <a href="#"><i class="ri-google-play-fill"></i></a>
              </div>
            </div>
            <div class="col-lg-3 ms-auto">
              <h6 class="text-white mb-4">CONTACT</h6>
              <p class="mb-1">P:(03) 9283 4726</p>
              <p class="mb-1">E:enquiries@mill.co</p>
              <p class="mb-0">
                A: 14 Paramore Street Mornington Peninsula Victoria 3552
              </p>
            </div>
            <div class="col-lg-3">
              <h6 class="text-white mb-4">OPENING HOURS</h6>
              <p class="mb-1">PMonday-Friday : 08:00 - 22:00</p>
              <p>aturday-Sunday : 08:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row gy-3 justify-content-between">
            <div class="col-auto">
              <p class="mb-0">Copyrights all rights reserved</p>
            </div>
            <div class="col-auto">
              <p class="mb-0">
                Designed By
                <a href="https://www.youtube.com/c/SA7MAN">Salman</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection