import React, { Component } from 'react';

export default class NewItem extends Component {
  render() {
    let { title, description, image, url, time, source, author } = this.props;
    return (
      <div className="card w-full relative  transition-all duration-300 flex flex-col justify-between hover:border-blue-500 ">
        <span className="badge bg-red-500 bg-opacity-80 font-medium absolute top-2 p-2 left-2 z-1">{source}</span>
        <img src={image} className="card-img-top h-60" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-lg text-gray-800 font-medium">{title}</h5>
        
          <p className="card-text text-gray-900">
            {description}
            {description ? description  : 'Opps! Sorry No description'}</p>
            {/* <br /> */}
            {/* <div>{source}</div> */}
            <a href={url} className='font-medium text-blue-500 transition-all duration-300'>Read More</a>
            <p className="mt-3 text-sm line-clamp-1  text-gray-600">by {author?author:'Unknown'}on {new Date(time).toGMTString()}</p>
          
        </div>
        <a href={url} target="_blank" className="bg-gray-800 hover:bg-blue-600 transition-all duration-300 rounded p-2 text-center text-white mx-3 mb-3">
          View More
        </a>
      </div>
    );
  }
}
