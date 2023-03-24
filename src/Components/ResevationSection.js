import React from 'react';

function ResevationSection() {
  return (
    <section id='reservation'>
      <div class='container'>
        <div class='row'>
          <div class='col-12 intro-text'>
            <h1>Reviews about Magizh Medicals</h1>
            <p>
              Give your reviews about the product and the services provided by
              the Magizh Medicals and share your requirements, we are happy to
              help you out.
            </p>
          </div>
        </div>
        <form action='#' class='row justify-content-center'>
          <div class='col-lg-8'>
            <div class='row g-3'>
              <div class='form-group col-md-6'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Full name'
                />
              </div>
              <div class='form-group col-md-6'>
                <input
                  type='email'
                  class='form-control'
                  placeholder='Email address'
                />
              </div>
              <div class='form-group col-md-6'>
                <input type='text' class='form-control' placeholder='Date' />
              </div>
              <div class='form-group col-md-6'>
                <input type='text' class='form-control' placeholder='Time' />
              </div>
              <div class='form-group col-md-12'>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='4'
                  class='form-control'
                  placeholder='Message'
                ></textarea>
              </div>
              <div class='form-group text-center col-md-12'>
                <a href='#' class='btn btn-brand'>
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ResevationSection;
