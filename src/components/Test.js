// import React, { useState }from 'react'

// const Test = (props) => {

//     const [name,setName] = useState("Khalil")
//     const [show,setShow] = useState(false)
//     const [fullName,setFullName] = useState("")
//     const [rank,setRank] = useState(props.rate)
//     const showrate = () =>{
//         console.log(props.rate)
//     }

//   return (
//     <div>
//         {show?<h1> my name is {name} </h1>:null}
//         <button onClick={()=>{setShow(!show)}}>Show</button>
//         <input name="fullName" type= "text" placeholder="full name" onChange={(e)=>setFullName(e.target.value)}/>
//         <h1>{fullName}</h1>
//         <h1>{rank}</h1>
//         <button onClick={(e)=>{setRank(e.target.value)}}>rate</button>
//     </div>
//   )
// }

// export default Test