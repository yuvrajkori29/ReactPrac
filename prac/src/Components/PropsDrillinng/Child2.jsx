import { useContext } from "react"
import { context } from "../../MyContext";

const Child2 = () => {

    const property = useContext(context);
    console.log(property.fruits[0]);

    
  return (

    <div id="useMe">Child2</div>
  )
}

export default Child2