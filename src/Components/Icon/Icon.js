import React from "react";

function Icon({ className }) {
  return (
    <span className={`material-icons-outlined ${className}`} title="Account">
      account_circle
    </span>
  );
}

export default Icon;
