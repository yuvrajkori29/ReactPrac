
import { useState } from 'react';
import './App.css';
import Login from './Components/stateHook/Login'
import Signup from './Components/stateHook/Signup';

const App = () => {

  const [userExist,setUserExist] = useState(false);

  return (
   
    <section className='shadow-lg'>
    <article className='border-[1px] border-black rounded-md w-[300px] p-3 flex flex-col gap-4 drop-shadow-lg'>

         {userExist ? <Login/> : <Signup/>}

         {userExist ?  <button className='px-4 py-1 bg-red-600 text-black' onClick={()=>{setUserExist(false)}}>SignUp</button> :    
           <button className='px-4 py-1 bg-[#0866ff] text-white' onClick={()=>{setUserExist(true)}}> Login</button>
          }
      

      
    
    </article>
      
    </section>
            
           

    
  )
}

export default App