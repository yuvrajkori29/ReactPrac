
import Child1 from './Components/PropsDrillinng/Child1';
import img from './assets/download.jpeg';

function App() {
  const user = {
     userID :1133,
     userName :'Yuvraj Kori',
     emailId : 'mailmenow@gmail.com',
     image : img
  }
  return (
   <>
   <Child1 property={user}/>

   </>
  )
}

export default App