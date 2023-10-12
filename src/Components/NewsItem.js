import React from 'react';



export default function NewsItem(props) {
  let {title,description,imgUrl, newsUrl, author,date,source } =
  props
  return (
    <div>
        <div className="card" >

<div> 
<span className="position-absolute  badge rounded-pill bg-primary "style = {{display : "flex" , justifyContent : "flex-end" , right : 0}} >
{source}    </span>
</div> 

<img src={!imgUrl? "https://media.istockphoto.com/id/508165218/photo/pink-or-red-rose-flower-in-the-garden.jpg?s=170667a&w=0&k=20&c=Cd0MoRdgZeH29PFNViyYNTp5jkoiWpTo47GJ7JMVRcQ=" : imgUrl} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{title} ...     </h5>
<p className="card-text">{description}...</p>
<div className="card-footer text-primary"> By {!author? "Unkown" : author} and updated on {new Date(date).toGMTString()}</div>
<a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-primary bt-sm">Read More</a>

</div>
</div>
    </div>
  )
}



