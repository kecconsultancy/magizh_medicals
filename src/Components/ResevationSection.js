import React from 'react'

function ResevationSection() {
  return (
    <section id="reservation">
      <div class="container">
        <div class="row">
          <div class="col-12 intro-text">
            <h1>Book Your Table</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae sint temporibus natus optio eveniet nobis accusantium?
            </p>
          </div>
        </div>
        <form action="#" class="row justify-content-center">
          <div class="col-lg-8">
            <div class="row g-3">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full name"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control" placeholder="Date" />
              </div>
              <div class="form-group col-md-6">
                <input type="text" class="form-control" placeholder="Time" />
              </div>
              <div class="form-group col-md-12">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  class="form-control"
                  placeholder="Meesage"
                ></textarea>
              </div>
              <div class="form-group text-center col-md-12">
                <a href="#" class="btn btn-brand">Send Message</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ResevationSection