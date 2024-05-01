import Home from "./Components/stateHook/Home"
import Nav from "./Components/stateHook/Nav"
import About from "./Components/stateHook/About"
import { useState } from "react"

  
  const App = () => {
    const  [page,setPage] = useState(true);
    return (
      <div>

<Nav></Nav>
 {page ? <Home></Home> : <About></About>}

 {page ?     
 <button className='px-4 py-1 bg-cyan-500 text-white' onClick={()=>{setPage(false)}}>About</button> :
   <button className='px-4 py-1 bg-cyan-500 text-white 'onClick={()=>{setPage(true)}}>Home</button>}




      </div>
    )
  }
  
  export default App