import React from "react";
import "./index.scss"
import Rate from "../Rate";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(images/hero.jpg)` }}>
      <div className="content">
        <div className="box-info">
          <h3>What’s your opinion on</h3>
          <h1>Pope Francis?</h1>
          <h2>
            He’s talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </h2>
          <a href="#">
            <span>More information</span>
          </a>
          <div className="spacer"></div>
          <h2 className="boldtext">What’s Your Verdict?</h2>
        </div>
        <Rate agreeLabel={'50%'} disagreeLabel={'50%'} hideLabel={true} />
      </div>
      <div className="headband">
        <div class="rate">
          <div>
            <span>CLOSING IN</span>
          </div>
        </div>
        <div>
          <span className="day-time"><b>22</b> days</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;