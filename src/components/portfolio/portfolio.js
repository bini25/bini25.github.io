import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      { <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>A Glimpse of My Work</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/E-commerce.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Techoftouch</h5>
                        <p>web designing</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/ptsd.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                      <h5>PTSD Consultation Program</h5>
                      <p>Government Website Redesign</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/homeless.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                      <h5>VA Homeless Programs</h5>
                      <p>Federal Program Web Portal</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/careers.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                      <h5>VA Careers</h5>
                      <p>Job Portal Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/vacareers-map.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                      <h5>VA Careers Job Map</h5>
                      <p>Interactive Job Locator</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/nps-map.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                      <h5>National Parks Service Job Map</h5>
                      <p>Geospatial Job Listings</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/Eventcalander.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                      <h5>Event Calendar</h5>
                      <p>PowerApp with Azure Backend</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/E-commerce.png" alt="" />
            <div className="description-box">
              <h4>Techoftouch</h4>
              <p>a great place for a nice e-commerce site for awesome Gadgets</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://www.techoftouch.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/ptsd.jpg" alt="" />
            <div className="description-box">
            <h4>PTSD Consultation Program</h4>
            <p>Government Website Redesign</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://ptsd.va.gov/PTSD/professional/consult/index.asp">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/homeless.jpg" alt="" />
            <div className="description-box">
            <h4>VA Homeless Programs</h4>
            <p>Federal Program Web Portal</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://www.va.gov/HOMELESS/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/careers.jpg" alt="" />
            <div className="description-box">
            <h4>VA Careers</h4>
            <p>Job Portal Development</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://vacareers.va.gov/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/vacareers-map.jpg" alt="" />
            <div className="description-box">
            <h4>VA Careers Job Map</h4>
            <p>Interactive Job Locator</p>
              <span className="categories"><i className="fa fa-tag" />Job Map</span>
            </div>
            <div className="link-box">
              <a href="https://aptivators.github.io/vacareers-jobs-map/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/nps-map.jpg" alt="" />
            <div className="description-box">
            <h4>National Parks Service Job Map</h4>
            <p>Geospatial Job Listings</p>
              <span className="categories"><i className="fa fa-tag" />Job Map</span>
            </div>
            <div className="link-box">
              <a href="https://aptivators.github.io/nps-jobs-map/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/Eventcalander.jpg" alt="" />
            <div className="description-box">
            <h5>Event Calendar</h5>
            <p>PowerApp with Azure Backend</p>
            <span className="categories"><i className="fa fa-tag" />PowerApps</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
         
        </div> {/* row End */}
      </section> 
  }
    
      </React.Fragment>
    );
  }
}
     
