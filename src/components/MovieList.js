import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Add from './Add'

const MovieList = (props) => {

    const [movieList,setMovieList] = useState([
        {
            title:"West World", 
            description:"At the intersection of the near future and the reimagined past, waits a world in which every human appetite can be indulged without consequence.",
            posterURL:"images/westworld.jpg",
            rating:4.3,
            trailer:"https://www.youtube.com/embed/qLFBcdd6Qw0"
          },
          {
            title:"Breaking Bad", 
            description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
            posterURL:"images/breakingbad.jpg",
            rating:4.7,
            trailer:"https://www.youtube.com/embed/HhesaQXLuRY"
          },
          {
            title:"Doctor Strange",
            description:"Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
            posterURL:"images/doctorstrange.jpg",
            rating:3.7,
            trailer:"https://www.youtube.com/embed/aWzlQ2N6qqg"
          },
          {
            title:"The Northman",
            description:"From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder.",
            posterURL:"images/thenorthman.jpg",
            rating:3.7,
            trailer:"https://www.youtube.com/embed/oMSdFM12hOw"
          }
        ])

    const getAdd =(newMovie)=>{
        setMovieList([...movieList,newMovie])
      }

    useEffect(()=>{
      props.getMovies(movieList)
    })


  return (
    <div className="container">
        {movieList.filter((el)=>el.rating >= props.rate && el.title.toLocaleLowerCase().includes(props.searching.toLocaleLowerCase()))
        .map( el =>
          <MovieCard key={el.title} title={el.title} description={el.description} posterURL={el.posterURL} rating={parseInt(el.rating)}/>
        )}

        <div className='addButton'>
          <Add getAdd={getAdd}/>
        </div>

      </div>
  )
}

export default MovieList