import React from 'react';

function FeautureSection() {
  return (
    <section id='features' class='bg-cover'>
      <div class='container'>
        <div class='row'>
          <div class='col-12 intro-text'>
            <h1 class='text-white'>Why to choose us?</h1>
            <p class='text-white'>
              Magizh Medicals website allows customers to choose a product ands
              place a order in an efficient way.
            </p>
          </div>
        </div>
        <div class='row gy-4'>
          <div class='col-lg-3 col-sm-6'>
            <div class='feature p-4 text-center'>
              <div class='feature-icon'>
                <i class='ri-wifi-fill'></i>
              </div>
              <h4 class='text-white mt-4 mb-2'>Quality Product</h4>
              <p class='text-white'>
                We provide a decription about medicine definition,
                identification and impurities.
              </p>
            </div>
          </div>
          <div class='col-lg-3 col-sm-6'>
            <div class='feature p-4 text-center'>
              <div class='feature-icon'>
                <i class='ri-timer-2-fill'></i>
              </div>
              <h4 class='text-white mt-4 mb-2'>Quick Service</h4>
              <p class='text-white'>
                We supply your medical products within a short span of time.
              </p>
            </div>
          </div>
          <div class='col-lg-3 col-sm-6'>
            <div class='feature p-4 text-center'>
              <div class='feature-icon'>
                <i class='ri-user-5-fill'></i>
              </div>
              <h4 class='text-white mt-4 mb-2'>Secure Packing</h4>
              <p class='text-white'>
                We pack your medicines and kits with sterile packaging.
              </p>
            </div>
          </div>
          <div class='col-lg-3 col-sm-6'>
            <div class='feature p-4 text-center'>
              <div class='feature-icon'>
                <i class='ri-shield-star-fill'></i>
              </div>
              <h4 class='text-white mt-4 mb-2'>24/7 Service</h4>
              <p class='text-white'>
                We provide a fastest service and quick response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeautureSection;
