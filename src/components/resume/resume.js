import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          
          {/* Education Section */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Towson University</h3>
                  <p className="info">B.S. in Computer Science <span>•</span> <em className="date">May 2017</em></p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work Experience</span></h1>
            </div>
            <div className="nine columns main-col">

              <div className="row item">
                <div className="twelve columns">
                  <h3>Aptive Resources</h3>
                  <p className="info">Software Developer <span>•</span> <em className="date">May 2022 – Present</em></p>
                  <p>
                    - Developing and maintaining C# web applications for the Department of Veterans Affairs.<br/>
                    - Building and managing Azure Functions for job advertisement automation.<br/>
                    - Designing and optimizing SharePoint, PowerApps, and ASP.Net Core solutions.<br/>
                    - Leading the redesign of enterprise web pages using OpenText TeamSite CMS.<br/>
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Chickasaw Nation Industries</h3>
                  <p className="info">Application Development Analyst <span>•</span> <em className="date">April 2021 – May 2022</em></p>
                  <p>
                    - Developed business reports and analytics solutions for the Indian Health Service.<br/>
                    - Created system workflows, collaborated with IT teams, and optimized database performance.<br/>
                    - Ensured compliance with audit and security requirements.<br/>
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Alesig Consulting LLC</h3>
                  <p className="info">Web Applications Developer <span>•</span> <em className="date">Oct 2020 – April 2021</em></p>
                  <p>
                    - Enhanced and debugged PHP and Java websites for the Department of Labor.<br/>
                    - Designed SharePoint business solutions and implemented Power BI dashboards.<br/>
                    - Ensured 508 compliance for web accessibility.<br/>
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>One-to-Many Solutions</h3>
                  <p className="info">Web Developer <span>•</span> <em className="date">Feb 2018 – March 2020</em></p>
                  <p>
                    - Built custom WordPress themes and templates using HTML, CSS, and PHP.<br/>
                    - Developed responsive, mobile-friendly websites and web applications.<br/>
                    - Maintained SharePoint sites and worked with Active Directory.<br/>
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>PayPal</h3>
                  <p className="info">Java Software Developer <span>•</span> <em className="date">May 2017 - Dec 2017</em></p>
                  <p>
                    - Developed UI components with HTML, CSS, and JavaScript.<br/>
                    - Built enterprise applications using Spring Framework, Hibernate, and SOAP web services.<br/>
                    - Used Maven for dependency management and deployed on Apache Tomcat.<br/>
                  </p>
                </div>
              </div>

            </div>
          </div>

   {/* Skills Section */}
<div className="row custom-skills-section">
  <div className="three columns header-col">
    <h1><span>Skills</span></h1>
  </div>

  <div className="nine columns main-col">

    {/* Full Stack Development */}
    <h3>Full Stack Development</h3>
    <div className="custom-skills-grid">
      <span className="custom-skill-badge"><i className="fab fa-react"></i> React</span>
      <span className="custom-skill-badge"><i className="fab fa-js"></i> JavaScript</span>
      <span className="custom-skill-badge"><i className="fab fa-node-js"></i> Node.js</span>
      <span className="custom-skill-badge"><i className="fas fa-code"></i> C# / .NET</span>
      <span className="custom-skill-badge"><i className="fab fa-php"></i> PHP</span>
      <span className="custom-skill-badge"><i className="fas fa-database"></i> SQL Server / MySQL</span>
      <span className="custom-skill-badge"><i className="fas fa-cloud"></i> Azure Functions</span>
      <span className="custom-skill-badge"><i className="fas fa-share-square"></i> SharePoint / PowerApps</span>
    </div>

    {/* Technical Expertise */}
    <h3>Technical Expertise</h3>
    <div className="custom-skills-categories">
      <div><i className="fas fa-paint-brush"></i> <strong>Frontend:</strong> React, TypeScript, HTML, CSS, Bootstrap</div>
      <div><i className="fas fa-server"></i> <strong>Backend:</strong> C#, .NET Core, PHP, Node.js, ASP.NET</div>
      <div><i className="fas fa-database"></i> <strong>Databases:</strong> SQL Server, MySQL, MongoDB</div>
      <div><i className="fas fa-cloud"></i> <strong>Cloud & APIs:</strong> Azure Functions, RESTful APIs, GraphQL, Serverless</div>
      <div><i className="fas fa-cogs"></i> <strong>CMS & Tools:</strong> OpenText TeamSite, SharePoint, WordPress, Power Automate</div>
    </div>

  </div>
</div>



        </section>
      </React.Fragment>
    );
  }
}





     
    
