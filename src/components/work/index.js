import Image from "next/image";
import React from "react";
import Work_video from "@/assets/work.png";
import Work2 from "@/assets/work2.png";
import Work3 from "@/assets/work3.png";
import VideoIcon from "@/assets/Svg/videoPlay";
import VideoPlay from "@/assets/Svg/videoPlay";

const Work = () => {
  return (
    <>
      <div className="work">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="content">
                <h1>
                  How it <span>Work</span>
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="video">
                <Image
                  src={Work_video}
                  width={1100}
                  height={600}
                  alt="work Banner"
                />
                <div className="diveo_play">
                  <VideoPlay />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div>
                <div className="top_content">
                  <h1>
                    How it <span>Work</span>
                  </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    availabl , but the majority have suffered alteration in some
                    for by.
                  </p>
                </div>
                <div className="bottom_content">
                  <div className="row">
                    <div className="col-lg-7">
                      <Image
                        src={Work2}
                        width={1100}
                        height={400}
                        alt="work Banner"
                      />
                    </div>
                    <div className="col-lg-5">
                      <Image
                        src={Work3}
                        width={1100}
                        height={400}
                        alt="work Banner"
                      />
                    </div>
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

export default Work;
