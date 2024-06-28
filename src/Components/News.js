import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  

  const updateNews = async () => {
    props.changeProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fda739acc4464ba5b1bcdb7c6debd65e&page=${page}&pageSize=${props.pageSize}`;    
    
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.changeProgress(100);
    // 
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsDaily`;
    updateNews();   
        //eslint disable-next-line 
  }, [])

  // const previousBtn = async () => {
  //   setPage(page-1)
  //   updateNews();

  // };

  // const nextBtn = async () => {  
  // setPage(page+1)
  // updateNews();

  // };

  const fetchMoreData = async () => {
    
    
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fda739acc4464ba5b1bcdb7c6debd65e&page=${page+1}&pageSize=${props.pageSize}`;    
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)    
  };

 
    return (
      <div>
        <div className="container-fluid my-3">
          <h1 className="mb-5 text-center mt-5">
            Telling the reader that the story is about{" "}
            {capitalizeFirstLetter(props.category)}
          </h1>
          {loading && <Spinner />}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<h4>{<Spinner />}</h4>}
          >
            <div className="container">
              <div className="row mt-3">
                {articles?.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItems
                        title={element.title ? element.title.slice(0, 40) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 50)
                            : ""
                        }
                        imgurl={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <= 1} type="button"  className="btn btn-outline-primary" onClick={this.previousBtn}>{" "}&larr; Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-outline-primary" onClick={this.nextBtn}>Next &rarr;</button>
            </div> */}
        </div>
      </div>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 7,
  // sources: "techcrunch",
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  // page: PropTypes.number
};

export default News;
