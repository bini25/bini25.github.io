import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {
                <section id="about">
                  <div className="row">
                    <div className="three columns">
                      <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                      <h2>About Me</h2>
                      <p>I enjoy turning complex problems into simple,
                           beautiful and intuitive designs. When I'm not coding, 
                           Ping-Ponging, you'll find me playing soccer and running my heart out in the park.
                      </p>
                      <div className="row">
                        <div className="columns contact-details">
                          <h2>Contact Details</h2>
                          <p className="address">
                            <span>Beniyam Mitiku</span><br />
                            <span>3910 Tynewick dr<br />
                              silver spring, MD 20906 US
                            </span><br />
                            <span>(240)-491-7665</span><br />
                            <span>mitikubeniyam25@gmail.com</span>
                          </p>
                        </div>
                        <div className="columns download">
                          <p>
                          <a href="BMresume" target="_blank" rel="noopener noreferrer" download>
                       <button>
                          <i className="fa fa-download"  />
                                Download Resume
                         </button>
                      </a>
                            {/*<a href="BMresume" className="button"><i className="fa fa-download" />Download Resume</a>*/}
                          </p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .main-col */}
                  </div>
                </section>
              
          

      }
     
      </React.Fragment>
    );
  }
}





