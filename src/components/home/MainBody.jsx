import React, { useState } from "react";
import Typist from "react-typist";
import {
  devDesc,
  icons,
} from "../../editable-stuff/configurations.json";

const MainBody = () => {
  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  // const [hoverstatus, setHoverstatus] = useState(
  //   new Array(icons.length).fill("socialicons")
  // );

  // const toggleHover = (data) => {
  //   const newhoverStatus = [...hoverstatus];

  //   if (data.event === "enter")
  //   {
  //     newhoverStatus[data.icon.id] = "socialiconshover";
  //     return setHoverstatus(newhoverStatus);
  //   } else if (data.event === "leave")
  //   {
  //     newhoverStatus[data.icon.id] = "socialicons";
  //     return setHoverstatus(newhoverStatus);
  //   }
  // };

  return (
    <div>
      <div
        // id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        {/* <div id="stars"></div> */}
        <div className="container container-fluid text-center ">
          <h1 className="display-3">
            I am Hawa Ko Reporter
          </h1>
          <Typist className="lead">

            A messaging tool that engages people on emergence of air pollution and how to respond to it going forward.
             </Typist>
          <br />
          <span>Text me on</span> <br />
          <a
            className="btn btn-outline-light btn-lg"
            href="https://www.facebook.com/hawakoreporter/"
            role="button"
            aria-label="Text on Messenger"
            target="_blank"
            rel='noopener noreferrer'
            style={{
              width: '124px'
            }}
          >
            Messenger
          </a>
          <span> </span>
          <a
            className="btn btn-outline-light btn-lg"
            href="#aboutme"
            role="button"
            aria-label="Text on Viber"
            style={{
              width: '124px'
            }}
          >
            Viber
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
