"use client";
import React from "react";
import Slider from "react-slick";

import Link from "next/link";
import Image from "next/image";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";
import { PartnerLogo } from "../data/commonData";

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <>
        <div className="partners">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="content">
                  <h1>
                    Reputed <span>Partners</span>
                  </h1>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="slide_logo">
                  <Slider {...settings}>
                    {PartnerLogo.map((item, i) => (
                      <div className="logo_box" key={i}>
                        <Link href={item.link}>{item.logo}</Link>
                      </div>
                    ))}
                  </Slider>
                  <p>including thousands other brokers and prop firms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Partners;
