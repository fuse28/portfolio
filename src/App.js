import "./App.css";
import Gif from "./Gif";
import Typed from "typed.js";
import React from "react";
import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import react from "./images/react.png";
import bootstrap from "./images/bootstrap.png";
import materialui from "./images/material ui.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import footerImg from "./images/footerImg2.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Front-end developer", "UI/UX Designer", "Proud Indian"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Gif />
        <div className="headline">
          <span className="name">Aatish Avhad</span>

          <span className="wrapper">
            <h2 className="static-text">I am a </h2>
            <span
              className="dynamic-text"
              style={{ whiteSpace: "pre" }}
              ref={el}
            ></span>
          </span>
        </div>
      </div>
      <div className="abt">
        <h1 className="about">About me</h1>
        <p className="myself">
          hey!! I'm a Front-end developer, who graduated as Eletrical Engineer,
          I've a passion for coding and I'm looking for an opportunity to work
          so that I can assist company to grow and enhance my skills as well.
        </p>
      </div>
      <br />
      <div>
        <h1 className="skills">Skills</h1>
        <div className="logos">
          <img className="html" src={html} alt="html logo" />
          <img className="css" src={css} alt="css logo" />
          <img className="javascript" src={javascript} alt="js logo" />
          <img className="react" src={react} alt="react logo" />
          <img className="bootstrap" src={bootstrap} alt="bootstrap logo" />
          <img className="material-ui" src={materialui} alt="MUI logo" />
        </div>
      </div>
      <br />
      <div className="carousal">
        <CCarousel controls indicators interval={5000}>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img3} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
      </div>
      <br />
      <div className="projects">
        <ui>
          Projects
          <li>Google clone</li>
          <p>Made a Google clone using React</p>
          <li> Quiz App</li>
          <p>Made a Quiz App using Javascript</p>
          <li> Cocktail-App</li>
          <p>
            <a href="https://cocktail22-app.herokuapp.com/">
              https://cocktail22-app.herokuapp.com/
            </a>
          </p>
          <li>Budget-App</li>
          <p>
            {" "}
            A budget application using useContext, custom hooks, bootstrap for
            managing your expenses{"     "}
            <a href="https://expense22-app.herokuapp.com/">
              https://expense22-app.herokuapp.com/
            </a>
          </p>
          <li>CRM application</li>
          <p>
            Customer Relationship management application where you can raise and
            manage your complaints
          </p>
        </ui>
      </div>
      <br />
      <div className="more-about">
        <p>Want to know more ? contact me here</p>
      </div>
      <div className="icons">
        <a href="mailto:aatishavhad07@gmail.com">
          <EmailOutlinedIcon sx={{ fontSize: 80, color: "red" }} />
        </a>
        <a href="https://github.com/fuse28">
          <GitHubIcon sx={{ fontSize: 80, color: "black" }} />
        </a>
        <a href="https://twitter.com/28_fuse">
          <TwitterIcon sx={{ fontSize: 80, color: "blue" }} />
        </a>
        <a href="https://www.linkedin.com/in/aatishavhad/">
          <LinkedInIcon sx={{ fontSize: 80, color: "rgb(0,122,181)" }} />
        </a>
      </div>
      <footer className="footer">
        <img className="footerImg" src={footerImg} />
      </footer>
    </>
  );
}

export default App;
