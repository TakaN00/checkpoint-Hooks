import React, {useState} from 'react'
import ReactStars from "react-rating-stars-component";

const Filter = (props) => {
    const ratingChanged = (newRating) => {
        props.getRate(newRating)
      };  

    // const [search,setSearch]=useState[""]

    // const handleChange = (e) => {setSearch(e.target.value)}

    // const searchChanged = () => {
    //   props.getSearch(search)
    // }

    // const wrapper = () => {
    //   handleChange()
    //   searchChanged()
    // }

  return (
    <div className='filter'>
        <div className='search'>
            <input placeholder='Search...' onChange={(e)=>props.getSearch(e.target.value)}/>
        </div>
        <ReactStars className='stars'
                edit={true}
                Count={5}
                isHalf={true}
                color="white"
                activeColor="#e50913"
                value={0}
                onChange={ratingChanged}
        />
    </div>
  )
}

export default Filter