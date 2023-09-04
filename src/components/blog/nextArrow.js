import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none">
        <circle cx={15} cy={15} r="12.5" stroke="#EEEBF2" strokeWidth="1.5" />
        <path
          d="M13.125 10C13.125 10 16.875 13.6824 16.875 15C16.875 16.3176 13.125 20 13.125 20"
          stroke="#EEEBF2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default NextArrow;
