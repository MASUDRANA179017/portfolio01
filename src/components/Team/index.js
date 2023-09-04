"use client";
import React from "react";
import teammemer from "@/assets/teambanar.png";
import Image from "next/image";
import Teammembericon from "@/assets/Svg/teammembericon";
import { motion, useTime, useTransform } from "framer-motion";



import { Montserrat, DM_Sans } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});


const App = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
};

const Teammember = () => {
  return (
    <>
      <div className="teammenber">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <h1 className={montserrat.className}>
                Run Agency Smartly with <br/> Our <span>Team Member.</span>
              </h1>
              
            </div>
            <div className="row justify-content-between ">
              <div className="col-lg-6">
                <div className="right_team">
                  <Image
                    src={teammemer}
                    width={700}
                    height={550}
                    alt="Banner"
                  />
                  <motion.div className="icon">
                    <Teammembericon />
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="left_team">
                  <div className="content_1">
                    <h1>
                      What provide to <span>our client</span>
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      availabl , but the majority have suffered alteration in
                      some for by injected humour, or randomised words which
                      don't look.There are many variations of passages.
                    </p>
                  </div>
                  <div className="content_1">
                    <h1>
                      Optimize for quickly <span>display.</span>
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      availabl but the major.There are many variations of
                      passages of.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    Contact Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teammember;
