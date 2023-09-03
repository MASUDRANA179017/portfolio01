"use client";
import React from "react";
import Slider from "react-slick";
import { SlideData } from "../data/commonData";
import Link from "next/link";
import Image from "next/image";
import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.png";

const Blog = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    
  };
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
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
                  {/* {SlideData.map((item, i) => (
                    <div className="slide_box" href={item.link} key={i}>
                      <image
                        src={item.image}
                        width={700}
                        height={450}
                        alt="Banner"
                      />
                      <h3>{item.title}</h3>
                      <div className="card_bottom">
                        <Link href={item.link} key={i}>
                          {item.readMore}
                        </Link>
                        <span>{item.date}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))} */}

                

                  <div className="slide_box">
                    <Image src={blog1} width={500} height={220} alt="Banner" />
                    <h3>Bitcoin and Economic Freedom</h3>
                    <div className="card_bottom">
                      <span >
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

export default Blog;
