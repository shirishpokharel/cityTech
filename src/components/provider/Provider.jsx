"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Provider({ children }) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" />
    </>
  );
}

export default Provider;
