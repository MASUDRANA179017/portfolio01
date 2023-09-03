import React from "react";
import { IoIosSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <div className="container">
          <div className="news_content">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <h2>Subscribe to Our Newsletter</h2>
              </div>
              <div className="col-lg-5">
                <input type="email" placeholder="Enter Your Mail" />
                <button type="submit">
                  <IoIosSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
