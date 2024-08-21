import React, { Component } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
  const [sun, setSun] = useState("☀️");

  const logo = () => {
    if (sun === "🌑") {
      setSun("☀️");
    } else {
      setSun("🌑");
    }
  };

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <Link className="navbar-brand" to="/">
        <img
          src="global-news-4306.png"
          width="30"
          height="30"
          class="d-inline-block align-top mx-2"
          alt=""
        />
        Daily News
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/general">
              General
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
        
        <form className="form-inline" role="search">
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "black" : "white"
            }`}
          >
            <input
              className="form-check-input mr-sm-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleModes();
                logo();
              }}
            />
            <label
              className="form-check-label mx-3"
              htmlFor="flexSwitchCheckDefault"
            >
              {sun}
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}
