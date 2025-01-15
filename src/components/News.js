import React, { useEffect, useState } from "react";
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
    const url = `https://api.thenewsapi.com/v1/news/${props.category}?api_token=VP7ihv7z5TikvOourlS4TbwJWATUQNyQSAJjQAG4&search=forex%20%2B%20%28usd%20%7C%20gbp%29%20-cad&language=en&categories=business%2Ctech&exclude_categories=travel&published_after=2025-01-08&page=${page}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.data); // Updated for the new API response structure
    setTotalResults(parsedData.meta.found); // Updated for the new API response structure
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsDonkey - ${capitalize(props.category)}`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const url = `https://api.thenewsapi.com/v1/news/all?api_token=VP7ihv7z5TikvOourlS4TbwJWATUQNyQSAJjQAG4&search=forex%20%2B%20%28usd%20%7C%20gbp%29%20-cad&language=en&categories=business%2Ctech&exclude_categories=travel&published_after=2025-01-08&page=${nextPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.data)); // Append new articles
  };

  return (
    <>
      <h1
        style={{ textAlign: "center", margin: "33px 0px", marginTop: "90px" }}
      >
        NewsDonkey - Top {` ${capitalize(props.category)} `} Headlines
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
                      ele.description
                        ? ele.description.slice(0, 97) + ".."
                        : ""
                    }
                    imgURL={ele.image_url} // Updated for the new API
                    newsURL={ele.url}
                    author={!ele.author ? "unknown" : ele.author}
                    time={ele.published_at} // Updated for the new API
                    source={ele.source} // Updated for the new API
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
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
