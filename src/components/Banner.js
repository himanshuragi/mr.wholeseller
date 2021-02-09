import React from "react";
import { Link } from "react-router-dom";
import "../components_css/Banner.css";
import cover from './cover.jpeg'

function Banner() {
  return (
    <header>
      <div className='banner_container'><img src={cover} alt='cover' className='banner'></img></div>
      <div className="banner_contents">
        <h1 className="banner_title">
          New Arrivals!
        </h1>
        <div className="banner_buttons">
          <h1 className="banner_description">The Brand New Stock Of Polo T-shirts Is Now Available!!!</h1>
          {/* <button className='banner_btn'>buy now</button> */}
        </div>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
