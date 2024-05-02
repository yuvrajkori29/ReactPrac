import  { Component } from 'react'
import './App.css'
export default class App extends Component {

  //constructor\
  constructor(){
    super()
    this.state = {
      userName : "Ram",
      userAge : 10,
      gender : 'Male',
      city : 'XYZ'
    }
  }


  render() {
    return (
      <div className='text-lg'>
        <h2>User-Name is {this.state.userName} </h2>
        <h2>Age : {this.state.userAge}</h2>
        <h2>Gender: {this.state.gender}</h2>
        <h2>City : {this.state.city}</h2>

        <button className='bg-purple-400 text-white p-4 rounded-md text-lg' onClick={()=>{this.setState({age:24,city:'Delhi'})}}>Change city</button>
      </div>
    )
  }
}
