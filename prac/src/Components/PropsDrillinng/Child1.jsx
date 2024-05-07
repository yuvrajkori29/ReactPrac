import { useContext } from "react"
import { context } from "../../MyContext";

const Child1 = ()=> {
   
    const property = useContext(context);
    console.log(property);

  
  return (
  <>
     
  </>
  )
}

export default Child1