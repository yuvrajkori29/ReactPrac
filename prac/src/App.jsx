
import { useState} from 'react'
import {} from './App.css'

function App() {

  ///use stattHook
  const [count,setCount] = useState(0);

  const Increment = ()=>{
       setCount(()=>count+1);
  }


  const Decrement = ()=>{
    if(count >0)
    setCount(()=>count-1);
  }
  const Reset = ()=>{
    setCount(()=>0);
  }

  return (
    <div className='flex flex-col  h-screen justify-center items-center  '>
    <h1 className='border-2 border-black-700 bg-yellow-400 py-2 px-3 m-6'>Counter : <span>{count}</span></h1>
      <div className='flex justify-center items-center gap-6'>
      <button className='border-2 border-black-700 py-1 px-4 bg-yellow-400'   onClick={Increment}>   Increment +</button>
       <button  className='border-2 border-black-700 py-1 px-4  bg-yellow-400'   onClick={Decrement}>Decrement -</button>
       <button  className='border-2 border-black-700 py-1 px-4  bg-yellow-400'   onClick={Reset}>Reset</button>
      </div>
       
    </div>
  )
}

export default App