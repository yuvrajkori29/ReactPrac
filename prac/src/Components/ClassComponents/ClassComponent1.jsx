import  { Component } from 'react'

export default class ClassComponent1 extends Component {

  //constructor\
  constructor(){
    console.log("constructor call") 
    super()
    this.state = {
      fname :'Chombu'
    }

    

    
  }


//   here is an error pls remove
  static getDerivedStateFromProps(props,state){
    console.log("isnide a getderivdestate from orops");
    console.log(props);
    console.log(state);
    return true
    
   
  }

 
componentDidMount(){
    console.log("inside compnendtdid mount")
}


shouldComponentUpdate(currentProps,currentState)
{
    console.log("currentProp" , currentProps);
    console.log("cureentSTATE" ,currentState);
    console.log("shoulCononent Uodate")

    return true;
}

getSnapshotBeforeUpdate(prevProp,prevState)
{
    console.log("prevProp" , prevProp);
    console.log("prevSTATE" ,prevState);
    console.log("shoulCononent Uodate")

    return {fname : 'chomu'};
}

componentDidUpdate(prevProp,prevState,Snapshot)
{
    console.log("inside compnetdidUPdate method");
    console.log("prevProp" , prevProp);
    console.log("prevSTATE" ,prevState);
    console.log("snapshot" , Snapshot);
   
}

componentWillUnmount()
{
    console.log("nide compontwillunmount")
}

  render() {
    console.log("inside render");
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    return (
        <div className='text-lg'>
        <h2>User-Name is {this.state.fname} </h2>
       {/*<h2>Age : {this.state.userAge}</h2>
       <h2>Gender: {this.state.gender}</h2>
       <h2>City : {this.state.city}</h2> */}


       <button className='bg-purple-400 text-white p-4 rounded-md text-lg' onClick={()=>{this.setState({fname :'Dinga'})}}>Change city</button>
     </div>
    )
  }
}
