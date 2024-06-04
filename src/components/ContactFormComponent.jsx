import React from 'react'

function ContactFormComponent() {
  return (
    <div className="contact-form ">
        <div className="m-auto contact-d1 d-flex justify-content-center align-item-center flex-column">
          <div className=" m-auto about-background2 mt-5" >
            <form>
                <div className="row mb-4">
                    <div className="col">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form6Example1" className="form-control" />
                        <label className="form-label" for="form6Example1">First name</label>
                    </div>
                    </div>
                    <div className="col">
                    <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form6Example2" className="form-control" />
                        <label className="form-label" for="form6Example2">Last name</label>
                    </div>
                    </div>
                </div>

                

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form6Example5" className="form-control" />
                    <label className="form-label" for="form6Example5">Email</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="number" id="form6Example6" className="form-control" />
                    <label className="form-label" for="form6Example6">Phone</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                    <label className="form-label" for="form6Example7">Additional information</label>
                </div>

               

                <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Submit</button>
            </form>
            
          </div>
        </div>

        <div className="contact-d1">
          <div className="d-flex h-100 m-auto justify-content-center align-item-center flex-column">
            <h2 className="p-2">Find your
              Business solution with us</h2>
            <p className="p-2">
              Orestes Technologies Pvt. Ltd. successfully Started to service global customers in the field of
              web design & development, Mobile App development ,Web Application,Software Development,branding.
              We aim to meet and exceed customer satisfaction in every way possible.
              We have built a team of exceptionally talented professionals for whom perfection is a habit.
            </p>
          </div>
        </div>
    </div>
  )
}

export default ContactFormComponent
