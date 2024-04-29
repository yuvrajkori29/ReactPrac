import { Fragment } from "react"
import './App.css';
import { useRef } from "react";


function App() {

// hook -useRef

const myRef = useRef();


  const handleClick=()=>{
    // console.log(myRef);


//  document.body.style.backgroundColor = 'cyan';
//  document.getElementById('btn').style.border = '1px solid black';
//  document.getElementById('btn').style.color = 'black';


myRef.current.style.backgroundColor ='salmon'  ;          //so we dont require id  and old javascript  methods.
  }
  return (
    <Fragment >
      <div className ='border-1 border-white py-1 px-5 text-black hover:bg-cyan-50 hover:text-black ' id="btn"
       onClick={handleClick} ref ={myRef}>Hooks</div>
    </Fragment>
  )
}

export default App