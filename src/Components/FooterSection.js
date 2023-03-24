import React from 'react';

function FooterSection() {
  return (
    <footer class='bg-cover'>
      <div class='footer-top'>
        <div class='container'>
          <div class='row gy-5'>
            <div class='col-lg-4'>
              <img
                src={require('../images/Qrispy_white.svg')}
                class='mb-4'
                alt=''
              />
              <p>
                We believe that our customers deserve the best, and we strive to
                provide them with a hassle-free shopping experience.
              </p>
              {/* <div class="social-links">
                <a href="#"><i class="ri-facebook-circle-fill"></i></a>
                <a href="#"><i class="ri-instagram-fill"></i></a>
                <a href="#"><i class="ri-youtube-fill"></i></a>
                <a href="#"><i class="ri-google-play-fill"></i></a>
              </div> */}
            </div>
            <div class='col-lg-3 ms-auto'>
              <h6 class='text-white mb-4'>CONTACT</h6>
              <p class='mb-1'>P:9361551456</p>
              <p class='mb-1'>E:magizhmedicals1@gmail.com</p>
              <p class='mb-0'>
                A: 23/18A, College Pirivu, Karattadipalayam, Gobi- 638455
              </p>
            </div>
            <div class='col-lg-3'>
              <h6 class='text-white mb-4'>OPENING HOURS</h6>
              <p class='mb-1'>Monday-Friday : 08:00 - 22:00</p>
              <p>Saturday-Sunday : 08:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class='footer-bottom'>
        <div class='container'>
          <div class='row gy-3 justify-content-between'>
            <div class='col-auto'>
              <p class='mb-0'>Copyrights @magizhmedicals all rights reserved</p>
            </div>
            <div class='col-auto'>
              <p class='mb-0'>
                Designed By
                <a> Firehawks</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
