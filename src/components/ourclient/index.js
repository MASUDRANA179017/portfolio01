"use client";
import React from "react";
import { motion, spring } from "framer-motion";
import digitalmarketing from "@/assets/digitalmarketing.png";
import Image from "next/image";
import { CountUp } from 'use-count-up'
import { ClientData } from "../data/commonData";
const OurClient = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 300,}}
        className="ourclient">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-5">
              <div className="left_client">
                <h2>
                  What we provide to
                  <br />
                  <span> our Client</span>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <div className="img_section">
                  <Image
                    src={digitalmarketing}
                    width={400}
                    height={400}
                    alt="digital marketing img"
                  />
                  <motion.div
                    animate={{
                      scale: [.5, 1, .5, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                    }}
                    className="experience">
                    <h4><CountUp isCounting end={10} duration={3.2} />+</h4>
                    <p>Years of experience</p>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right_client">
                <div className="row">
                  {
                    ClientData.map((item, i)=>(
                      <div className="col-lg-6" key={i}>
                        <div className="client_data">
                          <i>{item.icon}</i>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurClient;
