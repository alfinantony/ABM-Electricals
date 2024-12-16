import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import banner2 from '/src/assets/banner2.jpg';
import banner1 from '/src/assets/banner1.jpg';
import banner3 from '/src/assets/banner3.jpg';

const Intro = () => {
  useEffect(() => {
    const bannerSlides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;

    const changeSlide = () => {
      bannerSlides[currentSlide].style.opacity = 0;
      currentSlide = (currentSlide + 1) % bannerSlides.length;
      bannerSlides[currentSlide].style.opacity = 1;
    };

    const intervalId = setInterval(changeSlide, 7000); // 7 seconds per slide

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="banner-container" id="home">
      {/* Slides */}
      <div className="banner-slide" style={{ backgroundImage: `url(${banner2})` }}></div>
      <div className="banner-slide" style={{ backgroundImage: `url(${banner1})` }}></div>
      <div className="banner-slide" style={{ backgroundImage: `url(${banner3})` }}></div>

      {/* Content */}
      <div className="banner-content">
        <h2 className="banner-title">40 Years of <span className="highlight">Legacy</span></h2>
        <h3 className="banner-caption">Built on Trust</h3>

        {/* Scroll arrow to service section */}
        <Link to="services" smooth={true} className="cs-down_btn">
          <span className="cs-down_btn::before"></span>
        </Link>
      </div>

      {/* CSS shapes */}
      <div className="cs-shape cs-shape-1"></div>
      <div className="cs-shape cs-shape-2"></div>
      <div className="cs-shape cs-shape-3"></div>
    </div>
  );
};

export default Intro;
