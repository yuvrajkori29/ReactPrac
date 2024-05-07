import { useContext } from "react"
import { context } from "./MyContext"
import Child2 from "./Components/PropsDrillinng/Child2";





const App = () => {
  const first  = useContext(context);
  console.log(first);
  return (
    <div>App
    <Child2/>
    </div>
    
  )
}

export default App