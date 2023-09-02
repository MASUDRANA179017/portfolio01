"use client";
import React from "react";
import Slider from "react-slick";
import { SlideData } from "../data/commonData";
import Link from "next/link";

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
  };
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="content">
                <h1>
                  Our Popular Project <span>And Blog</span>
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="slide_blog">
                <Slider {...settings}>
                  {SlideData.map((item, i) => (
                    <div className="slide_box" href={item.link} key={i}>
                      <image>{item.image}</image>
                      <h3>{item.title}</h3>
                      <div className="card_buttom">
                        <Link href={item.link} key={i}>
                          {item.readMore}
                        </Link>
                        <p>{item.date}</p>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
