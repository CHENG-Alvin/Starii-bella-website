//Import packages
import React, { useEffect } from "react";
import HomeBanner from "./HomeBanner.js";
import Links from "./Links.js";
import youtubeLogo from "../content/youtubeLogo.png";
import discordLogo from "../content/discordLogo.jpg";
import Comments from "./Comments.js";
import Aos from "aos";
import SubCount from "./SubCount.js";
import Message from "./Message.js";
import ChannelLink from "./ChannelLink.js";
import "aos/dist/aos.css";
import "./styles/Home.css";

//Home component
const Home = () => {
  //Aos Init
  useEffect(() => {
    Aos.init({ duration: 1500 });
    setTimeout(() => {
      alert(
        "Welcome to the Starii bella website! This is the preview version this means, there might be some bugs or issues in the website. Further more the content and shop page is still not completed.\nThank you!"
      );
    }, 1000);
  }, []);

  //Render component
  return (
    <div>
      {/*Upper app*/}
      <div id="upperApp">
        {/*Banner*/}
        <HomeBanner />
      </div>
      {/*Lower app*/}
      <div id="lowerApp">
        {/*Message*/}
        <div id="message" data-aos="fade-down">
          <Message />
        </div>
        {/*Container*/}
        <div data-aos="fade-down" style={{ margin: "6vw 0vw 6vw 0vw" }}>
          {/*SVG curves*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: "relative", top: "2vw" }}
          >
            <path
              fill="#4b95df"
              fillOpacity="1"
              d="M0,0L48,53.3C96,107,192,213,288,240C384,267,480,213,576,213.3C672,213,768,267,864,266.7C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          {/*Channel link*/}
          <ChannelLink />
          {/*Comments*/}
          <div id="comments">
            <Comments />

            {/*SVG curves*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{ position: "relative", bottom: "3vw" }}
            >
              <path
                fill="#4b95df"
                fillOpacity="1"
                d="M0,0L48,53.3C96,107,192,213,288,240C384,267,480,213,576,213.3C672,213,768,267,864,266.7C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
        {/*Links*/}
        <div id="links" data-aos="fade-down" data-aos-easing="ease-in-out">
          {/*Youtube link*/}
          <Links
            id="mediaLinks"
            imgSrc={youtubeLogo}
            btnText="Watch more!"
            tittle="More in depth!"
            link="https://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw"
            iconPadding="8vh"
          />
          {/*Discord link*/}
          <Links
            id="mediaLinks"
            imgSrc={discordLogo}
            btnText="Join now!"
            tittle="Let's chat!"
            link="https://discord.gg/XFTtKjwr73"
            iconPadding="8vh"
          />
        </div>
        <div id="subCounter" data-aos="fade-up">
          {/*SVG curves*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: "relative", top: "2vw" }}
          >
            <path
              fill="#4b95df"
              fillOpacity="1"
              d="M0,0L48,53.3C96,107,192,213,288,240C384,267,480,213,576,213.3C672,213,768,267,864,266.7C960,267,1056,213,1152,197.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          {/*Subscriber count*/}
          <SubCount />
        </div>
      </div>
    </div>
  );
};

//Export component
export default Home;
