import React, { Component } from "react";

export default class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "",
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message, subject } = this.state;

    // Basic Validation
    if (!name || !email || !message) {
      this.setState({ status: "Please fill in all required fields.", error: true });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xqaerqbg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
          status: "Your message was sent successfully!",
          error: false,
        });
      } else {
        this.setState({ status: "Something went wrong. Please try again.", error: true });
      }
    } catch (error) {
      this.setState({ status: "Error sending message. Try again later.", error: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">
              Let’s Connect – Open to New Opportunities
              </p>
            </div>
          </div>

          <div className="row">
            <div className="eight columns">
              {/* Contact Form */}
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={this.state.name} 
                      onChange={this.handleChange} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={this.state.email} 
                      onChange={this.handleChange} 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={this.state.subject} 
                      onChange={this.handleChange} 
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message <span className="required">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={this.state.message} 
                      onChange={this.handleChange} 
                      rows="6" 
                      required 
                    />
                  </div>
                  <div>
                    <button className="submit" type="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="loading" src="images/loader.gif" style={{ display: this.state.status && !this.state.error ? "inline-block" : "none" }} />
                    </span>
                  </div>
                </fieldset>
              </form>

              {/* Success & Error Messages */}
              {this.state.status && (
                <div id={this.state.error ? "message-warning" : "message-success"}>
                  <i className={this.state.error ? "fa fa-exclamation-circle" : "fa fa-check"} />
                  {this.state.status}
                </div>
              )}
            </div>

            {/* Sidebar Contact Info */}
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contact Information</h4>
                <p className="address">
                  Beniyam Mitiku<br />
                
                  Silver Spring, MD, 20904 US<br />
                  <span>(240) 491-7665</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
      </React.Fragment>
    );
  }
}


     