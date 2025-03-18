import React from "react";

const IconWrapper = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12"
  >
    {children}
  </svg>
);

export const BrainIcon = () => (
  <IconWrapper>
    <path
      d="M12 4C8 4 4 7 4 12C4 16 7 20 12 20C16 20 20 17 20 12C20 8 17 4 12 4Z"
      stroke="#7209B7"
      strokeWidth="2"
      className="animate-pulse"
    />
    <path
      d="M12 8V12L15 15"
      stroke="#00B4D8"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-spin-slow"
    />
  </IconWrapper>
);

export const TrophyIcon = () => (
  <IconWrapper>
    <path d="M8 21V17H16V21" stroke="#7209B7" strokeWidth="2" />
    <path d="M12 17V13" stroke="#7209B7" strokeWidth="2" />
    <path
      d="M7 4H17L19 8L12 13L5 8L7 4Z"
      fill="#00B4D8"
      className="animate-bounce"
    />
  </IconWrapper>
);

export const ClockIcon = () => (
  <IconWrapper>
    <circle cx="12" cy="12" r="9" stroke="#7209B7" strokeWidth="2" />
    <path
      d="M12 7V12L15 15"
      stroke="#00B4D8"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-spin-slow"
    />
  </IconWrapper>
);

export const PuzzleIcon = () => (
  <IconWrapper>
    <path
      d="M4 7H9V4C6 4 4 6 4 9V7Z"
      fill="#00B4D8"
      className="animate-wiggle"
    />
    <path
      d="M9 20V15H4C4 18 6 20 9 20Z"
      fill="#00B4D8"
      className="animate-wiggle"
    />
    <path
      d="M20 15H15V20C18 20 20 18 20 15Z"
      fill="#00B4D8"
      className="animate-wiggle"
    />
    <path
      d="M15 4V9H20C20 6 18 4 15 4Z"
      fill="#00B4D8"
      className="animate-wiggle"
    />
  </IconWrapper>
);

export const ChartIcon = () => (
  <IconWrapper>
    <path d="M4 20L20 20" stroke="#7209B7" strokeWidth="2" />
    <path d="M4 4V16" stroke="#7209B7" strokeWidth="2" />
    <path
      d="M8 12V16"
      stroke="#00B4D8"
      strokeWidth="2"
      className="animate-grow"
    />
    <path
      d="M12 8V16"
      stroke="#00B4D8"
      strokeWidth="2"
      className="animate-grow"
    />
    <path
      d="M16 10V16"
      stroke="#00B4D8"
      strokeWidth="2"
      className="animate-grow"
    />
  </IconWrapper>
);

export const ConnectIcon = () => (
  <IconWrapper>
    <circle cx="6" cy="12" r="3" fill="#7209B7" className="animate-pulse" />
    <circle cx="18" cy="12" r="3" fill="#7209B7" className="animate-pulse" />
    <path
      d="M9 12H15"
      stroke="#00B4D8"
      strokeWidth="2"
      className="animate-dash"
    />
  </IconWrapper>
);
