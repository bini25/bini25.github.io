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
                      <p>As a seasoned Software Developer & Cloud Engineer, I specialize in designing scalable and efficient applications. Outside of work, I enjoy playing soccer, table tennis, and staying active outdoors.
                      </p>
                      <div className="row">
                        <div className="columns contact-details">
                          <h2>Contact Details</h2>
                          <p className="address">
                            <span>Beniyam Mitiku</span><br />
                            <span>
                              Silver Spring, MD 20904 US
                            </span><br />
                            <span>(240)-491-7665</span><br />
                            <span>mitikubeniyam25@gmail.com</span>
                          </p>
                        </div>
                        <div className="columns download">
  <p>
    <a href="/BMresume.pdf" target="_blank" rel="noopener noreferrer" download="BMresume.pdf">
      <button>
        <i className="fa fa-download" />
        Download Resume
      </button>
    </a>
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





