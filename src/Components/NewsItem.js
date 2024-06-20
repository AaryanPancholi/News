import React from 'react'

const NewsItem =(props)=> {
  
  
   const  {title,description,imageUrl,newsUrl,time}=props
    return (
      <>
      <div>
      <div className="card" style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{description}</p>
   
    <a href={newsUrl}  target='_blank' rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
    <br></br>
    <small className="text-muted">{new Date(time).toGMTString()}</small>
    {/* <br></br> */}
   
  </div>
</div>


     
      </div>
       
       </>
    )
  
  }



export default NewsItem
