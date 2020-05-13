import React from "react";

import TimelineComponent from './TimelineComponent'


const AboutMe = () => {

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">

          <div className="col-5 d-none d-lg-block align-self-center">
            <h2 className="display-5 mb-3 text-center">Project Timeline</h2>
            <TimelineComponent />
          </div>

          <div className='col-lg-7'>
            <h2 className="display-5 mb-3 text-center">About Me</h2>
            {/* <p className="lead text-center">I work by allowing users to subscribe to air quality information on geographic areas they care about. The subscribers get daily air quality reports along with health recommendations. Going forward, subscribers are queried if they decided to follow the recommendation, are given tips to reduce their footprint. The data and insights are shared back with communities.</p> */}
            <p className="lead text-center">
              A group of students and ethusiasts came together..... Solvethon 2019...
          </p>
            <p className="lead text-center">
              <a

                className="btn btn-outline-dark btn-lg"
                href="#"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Learn More"
              >
                Learn More
                </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
