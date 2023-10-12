
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title= `${capitalizeFirstLetter(props.category)}-News-Web`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e3bbb6ad673455a9877560cef01de18&page=1&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error if the API call fails
      }
    };

    fetchData();
  }, [props.country, props.category, props.pageSize, props.setProgress]);

  const fetchMoreData = async () => {
    const { country, category, pageSize } = props;

    if (page * pageSize < totalResults) {
      try {
        const nextPage = page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4e3bbb6ad673455a9877560cef01de18&page=${nextPage}&pageSize=${pageSize}`;
        let response = await fetch(url);
        let parsedData = await response.json();
        setPage(nextPage);
        setArticles([...articles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error if the API call fails
      }
    } else {
             
            setHasMore(false);
    }
  };

  return (
    <div>
      <div className='container my-4'>
        <h2 className=' mb-4 text-center' style = {{marginTop : "90px"}}>News_Web Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          style={{ overflow: 'revert' }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4><Spinner/></h4>}
        >
          <div className='container'>
            <div className='row'>
              {articles.map((element) => (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ' '}
                    description={element.description ? element.description.slice(0, 50) : ' '}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
