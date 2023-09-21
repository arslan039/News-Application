import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class News extends Component {
 static defaultProps = {
country : "us" ,
pageSize : 6 ,
category : "sports"
 }

 static propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
 }
  constructor () {
    super ();
    this.state = {
      articles : [] ,
      loading : false,
      page : 1
    }
  }
 async componentDidMount(){
 let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3bbb6ad673455a9877560cef01de18&page=1&pageSize=${this.props.pageSize}`;
 this.setState({loading : true})
 let data = await fetch(url);
 let parsedata = await data.json();
 console.log(parsedata);
 this.setState({
   articles : parsedata.articles ,
  totalResults : parsedata.totalResults,
  loading : false

})
  }

  handlePrevBtn =async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3bbb6ad673455a9877560cef01de18&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page : this.state.page - 1 ,
    articles : parsedata.articles,
    loading : false
     } )



  }
  handleNextBtn=async ()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3bbb6ad673455a9877560cef01de18&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      page : this.state.page + 1 ,
    articles : parsedata.articles,
    loading : false
     } )
    }

  }
  

  render() {
    return (
      <div className='container my-4'>
       <h2 className='my-3 text-center'>News_Web Top Headlines</h2>
           
          {/* Added the Spinner Component here in the news component */
          }
      {this.state.loading && <Spinner/>}


<div className='row'>
  { !this.state.loading && this.state.articles.map((element) => {
 
    return        <div className='col-md-4' key = {element.url}>
<NewsItem title={element.title? element.title.slice(0, 40):" "} description={element.description?element.description.slice(0,50):" "} imgUrl ={element.urlToImage} newsUrl = {element.url} />
</div>
  })} 
</div> 

  <div className=' d-flex justify-content-between'>
    <button disabled = {this.state.page<=1} type="button" className="btn btn-primary btn-lg" onClick={this.handlePrevBtn}>  &larr; Previous</button>
    <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary btn-lg" onClick={this.handleNextBtn}>Next &rarr;</button>
  </div>
      </div>
    )
  }
}
