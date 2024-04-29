
import './App.css'

function App() {
  
  function addBackground(){
    document.body.style.backgroundColor = 'deeppink';
    const div= document.getElementById('box');
    div.style.cursor = 'pointer';

  } 

  function removeBackground(){
    document.body.style.backgroundColor = 'white';

  } 


//avoidReload;
  const handleSubmit=(e)=>{
    const input = document.getElementById('username').value;
    console.log(e.target);
e.preventDefault();
console.log(input);
  }


  return (
    <>
    {/* // <Fragment>
    //   <button className='py-1 px-6 bg-gray-500' onClick={addBackground} onDoubleClick={removeBackground}> dark</button>
    // </Fragment> */}

    <div id="box" className='w-[25vh] h-[25vh] bg-cyan-400 ' onMouseOver={addBackground} onMouseLeave={removeBackground}></div>
  
      <form className='flex flex-col' id='form' onSubmit={handleSubmit}>
      <label>Usename : </label>
        <input type='text' className='border border-black rounded mb-2 ' placeholder='enter ur username' id = 'username'></input>
        <button id = 'btn' className='py-1 px-6 bg-cyan-500'>Login</button>
      </form>
      

    </>
    
  )
}

export default App
