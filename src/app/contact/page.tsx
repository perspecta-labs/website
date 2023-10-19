"use client"

import HeaderPage from "../../components/Header"

const Contact = () => {

  return (
    <>
      <HeaderPage title={"Don't hesitate to get in touch"} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form action="https://api.web3forms.com/submit" method="POST" name="contactForm">
                <input type="hidden" name="access_key" value="b07868c8-8314-41b1-9174-2a4d9055263d"/>
                <div className="mb-6 flex flex-row justify-between">
                  <div>
                    <label htmlFor="fname" className="form-label">
                      First Name <span>*</span>
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      className="form-input w-64"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="form-label">
                      Last Name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-input w-64"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                    Email <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john.doe@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="form-label">
                    Company/Organization <span>*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Perspecta Labs"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="form-label">
                    Phone <span>*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Phone"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Message"
                    rows={8}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
