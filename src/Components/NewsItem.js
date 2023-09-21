import React, { Component } from 'react'

export  class NewsItem extends Component {
  render() {
    let {title,description,imgUrl, newsUrl } = this.props
    return (
      <div>
       <div className="card" >
  <img src={!imgUrl? "https://media.istockphoto.com/id/508165218/photo/pink-or-red-rose-flower-in-the-garden.jpg?s=170667a&w=0&k=20&c=Cd0MoRdgZeH29PFNViyYNTp5jkoiWpTo47GJ7JMVRcQ=" : imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
export default NewsItem;
