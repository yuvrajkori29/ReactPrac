import Child2 from "./Child2"

function Child1(props) {
    console.log(props)

  
  return (
  <>
  <Child2 propsC1 ={props}/>
  </>
  )
}

export default Child1