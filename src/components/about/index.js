"use client";
import React from "react";
import Slider from "react-slick";

import Link from "next/link";
import Image from "next/image";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";

const AboutUs = () => {
  const settings = {
    dots: false,
    arrows: false,
    startMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="aboutUs">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="content">
                <h1>
                  What People Say <span>About Us</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="slide_review">
                <Slider {...settings}>
                  <div className="slide_box">
                    <Image src={blog1} width={500} height={220} alt="Banner" />
                    <h3>Bitcoin and Economic Freedom</h3>
                    <div className="card_bottom">
                      <span>
                        <Link href="/">Read More</Link>
                      </span>
                      <span>10 January 2023</span>
                    </div>
                  </div>
                  <div className="slide_box">
                    <Image src={blog2} width={500} height={220} alt="Banner" />
                    <h3>Bitcoin and Economic Freedom</h3>
                    <div className="card_bottom">
                      <div className="link">
                        <Link href="/">Read More</Link>
                      </div>
                      <div>10 January 2023</div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <Image src={blog3} width={500} height={220} alt="Banner" />
                    <h3>Bitcoin and Economic Freedom</h3>
                    <div className="card_bottom">
                      <div className="link">
                        <Link href="/">Read More</Link>
                      </div>
                      <div>10 January 2023</div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <Image src={blog2} width={500} height={220} alt="Banner" />
                    <h3>Bitcoin and Economic Freedom</h3>
                    <div className="card_bottom">
                      <div className="link">
                        <Link href="/">Read More</Link>
                      </div>
                      <div>10 January 2023</div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
