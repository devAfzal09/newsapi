import React from 'react'

const NewsItems = (props) => {
  
    let {title, description, imgurl, url, author, date, source} = props
    return (
      <div>
        <div className="card card-int-css mb-3">
          <div className='badge-styling'>
            <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
        
            <img className='img-fluid' src={!imgurl?"https://images-cdn.ubuy.co.in/63a9ae2987efc65bb51e7c77-boss-baby-sunglasses-style-official.jpg": imgurl} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title?title:"unknows"}...</h5>
                <p className="card-text">{description?description:"unknows"}...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknows"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItems

// India announce squad for Men's T20 World Cup 2024
// Rohit Sharma will lead India’s quest for the long-awaited glory as BCCI announced their squad for the ICC Men’s T20 World Cup 2024 squad.