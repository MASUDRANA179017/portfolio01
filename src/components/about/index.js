"use client";
import React from "react";
import Slider from "react-slick";

import Link from "next/link";
import Image from "next/image";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";
import PrevArrow from "./prevArrow";
import NextArrow from "./nextArrow";

const AboutUs = () => {
  const settings = {
    dots: false,
    arrows: true,
    startMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <h4>James Willy</h4>
                        <p>CEO GTEX</p>
                      </div>
                    </div>
                  </div>
                  <div className="slide_box">
                    <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</h3>
                    <div className="card_bottom">
                      <Image src={blog1} width={10} height={20} alt="Banner" />
                      <div className="author">
                        <div>James Willy</div>
                        <div>CEO GTEX</div>
                      </div>
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
