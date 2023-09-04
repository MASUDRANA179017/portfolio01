"use client";
import React from "react";
import { motion } from "framer-motion";
import bannner from "@/assets/Banar.png"
import Image from "next/image";

import { Montserrat, DM_Sans } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});




const Banar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="banar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className={montserrat.className}>
                <span>Builds</span> your great portfolio <span>Website</span>
              </h2>
              <p className={dmSans.className}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <motion.button className={dmSans.className} whileHover={{ scale: 1.05 }} transition={{type: 'spring', stiffness: 300,}}>
                Contact Now
              </motion.button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_img">
                <Image src={bannner} width={1100} height={500} alt="Banner"/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Banar;
