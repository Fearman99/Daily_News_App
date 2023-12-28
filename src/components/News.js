import React, { Component, useEffect, useState } from "react";
import NewsItem from "./NewsItem.js";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

   useEffect
    (() => {
      document.title = `NewsDonkey - ${capitalize(props.category)}`;
      updateNews();
    },[]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };


  return (
    <>
      <h1 
        style={{ textAlign: "center", margin: "33px 0px", marginTop: "90px"}}
      >
        NewsDonkey - Top
        {` ${capitalize(props.category)} `}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4 my-3" key={ele.url}>
                  <NewsItem
                    title={ele.title ? ele.title.slice(0, 66) + ".." : ""}
                    description={
                      ele.description ? ele.description.slice(0, 97) + ".." : ""
                    }
                    imgURL={ele.urlToImage}
                    newsURL={ele.url}
                    author={!ele.author ? (ele.author = "unknown") : ele.author}
                    time={ele.publishedAt}
                    source={ele.source.name}
                    mode={props.mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  apiKey: "900bf35fa6e04bb1a0a53661fd8102d3",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};
export default News;
