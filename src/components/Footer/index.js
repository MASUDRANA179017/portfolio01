"use client"
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { Resources, Services } from "../data/commonData";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="section_one">
                <Link href="/">
                <Image src={logo} loading='lazy'/>
                </Link>
                <div>
                  <p className={montserrat.className}>
                    There are many variations of passages of available, but the
                    majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="section_two">
                <h4>Services</h4>
                <div className="footernav">
                  {Services.map((item, i) => (
                    <Link className={dmSans} href={item.link} key={i}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="section_three">
                <h4>Resources </h4>
                <div className="footernav">
                  {Resources.map((item, i) => (
                    <Link className={dmSans} href={item.link} key={i}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="section_four">
                <h4>Newsletter</h4>
                <p>Subscribe for our upcoming latest address and resources</p>
                <div className="newsletr">
                  <input type="email" placeholder="Enter Your Mail" />
                  <button type="submit"><IoIosSend /></button>
                </div>
                <div className="sosialicon">
                  <div className="icon">
                    <FaFacebookF />
                  </div>
                  <div className="icon">
                    <AiFillLinkedin />
                  </div>
                  <div className="icon">
                    <FaFacebookF />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
