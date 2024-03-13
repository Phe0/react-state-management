import React, { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  submit?: boolean;
}

export default function Button({
  children,
  onClick,
  submit = false,
}: ButtonProps) {
  return (
    <button
      className="py-2 px-4 bg-white font-bold text-2xl rounded-lg hover:scale-110 transition-all"
      type={submit ? "submit" : "button"}
      {...(onClick ? { onClick: onClick } : {})}
    >
      {children}
    </button>
  );
}
