import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      { <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> Towson University </h3>
                <p className="info">B.S. in computer science <span>•</span> <em className="date">May 2017</em></p>
                <p>
                  
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3></h3>
                <p className="info"><span></span> <em className="date"></em></p>
                <p>
                 </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>One-To-Many Solutions</h3>
                <p className="info">Senior Web developer <span>•</span> <em className="date">  Feburary 2018 - Present</em></p>
                <p>
                •	Effectively worked on coding of custom WordPress theme and template files using HTML, CSS, PHP, and Bootstrap 3 framework.
•	Administered project collaboration; solely responsible for digital workflow, backups, and project management.
•	Designed and developed GUI for applications and modules, using JavaScript
•	Designed and maintained intranet and Internet website, provided technical support in creating content areas; built on-line forms and connected them to databases. 
•	Participated and designed responsive websites to accommodate mobile platform.
•	Built and created GUI and also used scripting languages like PHP to interact with database on server-side development

                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>PayPal</h3>
                <p className="info">Java Developer <span>•</span> <em className="date">May 2017 - December 2018</em></p>
                <p>
                •	Designed UI using HTML, CSS and JavaScript.
•	Instantiated business objects with IOC pattern using spring framework and for Dependency Injection.
•	Implemented Object-relation mapping in the persistence layer using Hibernate frame work in conjunction with spring functionality.
•	Worked on writing Java code for extracting backend data from the main frames.
•	Used Maven to manage dependencies in the application and deploy it on Apache Tomcat server. 
•	Used Oracle database to maintain the abstracts and references.
•	Used Agile process for tracking and developing the application.

                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            </p>
            <div className="bars">
              <ul className="skills">
              <li><span className="bar-expand css" /><em>CSS/HTML5</em></li>
              <li><span className="bar-expand illustrator" /><em>Javascript/Node.js</em></li>
              <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              <li><span className="bar-expand html5" /><em>React</em></li>
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                 <li><span className="bar-expand wordpress" /><em>PHP</em></li>
                 <li><span className="bar-expand wordpress" /><em>Java</em></li>
                 <li><span className="bar-expand html5" /><em>SQL</em></li>
                </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>}
      
      </React.Fragment>
    );
  }
}




     
    
