import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'
 const NewsItem =(props)=> {
 
    let { title, description, imgURL, newsURL, author, time, source } =
      props;
    return (
      <>
        <div className="container my-3">
          <div className={`card border-secondary mb-3 text-${props.mode === "light" ? "black" : "white"} bg-${props.mode === "light" ? "white" : "black"}`} >
            <div class="card-header ">{source}</div>
            <img
              className="card-img-top"
              src={
                imgURL == null
                  ? "https://www.carscoops.com/wp-content/uploads/2023/12/34255432345534.jpg"
                  : imgURL
              }
              alt="Card image cap"
            />
            <div className={`card-body d-flex flex-column text-${props.mode === "light" ? "black" : "white"
              }`}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p class="card-text my-0">
                <small class="text-muted">{author}</small>
              </p>
              <p class="card-text my-0 mr-2">
                <small class="text-muted">
                  {new Date(time).toGMTString().slice(0, 17)}
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  {new Date(time).toGMTString().slice(17)}
                </small>
              </p>
              <a href={newsURL} className="btn btn-sm btn-primary mt-auto">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

export default NewsItem
