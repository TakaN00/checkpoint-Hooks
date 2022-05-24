import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';


function App() {
  const [rate, setRate] = useState(0)
  const [searching, setSearching] = useState('')
  const getRate =(rating)=>{
    console.log(rating)
    setRate(rating)
  }

  const getSearch =(searching)=>{
    setSearching(searching)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="bar">
        <h1>WatchHooks</h1>
        <Filter getRate={getRate} getSearch={getSearch}/>
        </div>
      </div>
      <MovieList searching={searching} rate={rate}/>
    </div>
  );
}

export default App;
