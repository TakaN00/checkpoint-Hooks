import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Movie from './pages/Movie'
import {Routes, Route, Link} from 'react-router-dom'


function App() {

  const [rate, setRate] = useState(0)
  const [searching, setSearching] = useState('')
  const [movies, setMovies] = useState('')

  const getMovies = (listing) =>{
    setMovies(listing)
  }
  
  const getRate =(rating)=>{
    setRate(rating)
  }

  const getSearch =(searching)=>{
    setSearching(searching)
  }

  return (
    <div className="App">

      <div className="header">
        <div className="bar">
        <Link to='/' style={{ textDecoration: 'none' }}><h1>WatchHooks</h1></Link>
        <Filter getRate={getRate} getSearch={getSearch}/>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<MovieList getMovies={getMovies} searching={searching} rate={rate}/>}/>
        <Route path='/:title' element={<Movie movies={movies}/>}/>
      </Routes>

    </div>
  );
}

export default App;
