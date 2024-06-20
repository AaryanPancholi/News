import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader`';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country, pageSize, category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

   const updateNews = async ()=> {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5ed3bd0126b74e4da0c1110f59531d9d&page=${page}&pageSize=${pageSize}`; 
    setLoading(true)
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json()
    setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setProgress(100);
}

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5ed3bd0126b74e4da0c1110f59531d9d&page=${nextPage}&pageSize=${pageSize}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
      setPage(nextPage);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px" }}>
        NewsHeadlines
      </h1>
      {loading&&<Loader/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!== totalResults}
        loader={<Loader />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4">
               
                <NewsItem
                  title={element.title? element.title.slice(0, 45) : ""}
                  description={element.description? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage? element.urlToImage : "https://i.ytimg.com/vi/6M6XBEkONgc/hqdefault_live.jpg"}
                  newsUrl={element.url}
                  time={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;