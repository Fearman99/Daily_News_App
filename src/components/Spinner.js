import React, { Component } from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="container text-center my-3 ">
      <img
        src={loading}
        alt="loading"
        style={{ width: "30px", height: "30px" }}
      />
    </div>
  );
};
export default Spinner;
