"use client";

import React from "react";
import { ButtonInterface } from "@/types";

const Button: React.FC<ButtonInterface> = ({
  children,
  onClick,
  type = "button",
  disabled,
  buttonClass = "button-create",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type as "button" | "submit" | "reset"}
      className={`${buttonClass} py-2 px-8 rounded-md text-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
