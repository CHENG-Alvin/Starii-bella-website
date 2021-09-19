//Import packages
import React, { useEffect } from "react";
import Banner from "./Banner.js";
import Links from "./Links.js";
import youtubeLogo from "../content/youtubeLogo.png";
import discordLogo from "../content/discordLogo.jpg";
import "./styles/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
        <Banner />
      </div>
      {/*Lower app*/}
      <div id="lowerApp">
        {/*Links*/}
        <div id="links" data-aos="fade-up" data-aos-easing="ease-in-out">
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
      </div>
    </div>
  );
};

//Export component
export default Home;
