import React from "react";
import "./Button.css";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition shadow ${className}`}
    >
      {children}
    </button>
  );
}
