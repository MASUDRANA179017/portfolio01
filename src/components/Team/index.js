"use client";
import React from "react";
import teammemer from "@/assets/teambanar.png";
import Image from "next/image";
import Teammembericon from "@/assets/Svg/teammembericon";
import { motion, useTime, useTransform } from "framer-motion";

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
            <div className="col-lg-5">
              <h1>
                Run Agency Smartly with Our <span>Team Member.</span>
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
            <div className="row justify-content-between ">
              <div className="col-lg-5">
                <div className="right_team">
                  <Image
                    src={teammemer}
                    width={1000}
                    height={500}
                    alt="Banner"
                  />
                  <motion.div className="icon">
                    <Teammembericon />
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="left_team">
                  <h1>
                    Run Agency Smartly with Our <span>Team Member.</span>
                  </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
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
