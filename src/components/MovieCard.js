import React from 'react'
import ReactStars from "react-rating-stars-component";

const MovieCard = (props) => {
  return (
    <div className="movie">
        <img src={props.posterURL} className="poster" alt={props.title}/>
        <div className="movie-details">
            <div className="movie-box">
                <h4 className="title">{props.title}</h4>
                <ReactStars 
                edit={false}
                Count={5}
                isHalf={true}
                color="white"
                activeColor="#e50913"
                value={props.rating}
        />
            </div>
            <div className="description">
                <h2>Synopsis</h2>
                {props.description}
            </div>
        </div>
    </div>
  )
}

export default MovieCard