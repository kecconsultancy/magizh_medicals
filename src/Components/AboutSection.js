import React from 'react';

function AboutSection() {
  return (
    <section id='about'>
      <div class='container'>
        <div class='row gy-4 align-items-center'>
          <div class='col-lg-5'>
            <img src={require('../images/syringe-1884784_1920.jpg')} alt='' />
          </div>
          <div class='col-lg-5'>
            <h1>About us</h1>
            <div class='divider my-4'></div>
            <p>
              Our company was founded with the vision of providing a convenient
              and reliable online platform for people to access medical supplies
              and equipment. We understand the importance of having access to
              quality medical products, and our mission is to make these
              products more easily accessible to everyone. We work with trusted
              suppliers to source the best quality products, ensuring that our
              customers receive only the highest quality items. From first aid
              supplies to medical equipment, we have a wide range of products
              available to meet your needs.
            </p>
            <p>
              At our core, we are committed to providing exceptional customer
              service. We believe that our customers deserve the best, and we
              strive to provide them with a hassle-free shopping experience. Our
              knowledgeable and friendly customer service team is available to
              answer any questions or concerns that you may have.
            </p>
            <a href='#' class='btn btn-brand'>
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
