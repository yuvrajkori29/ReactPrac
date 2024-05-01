import {Fragment, useRef} from 'react'; 

function App() { 

// Creating a ref object using useRef hook 
const focusPoint = useRef(); 
const myRef= useRef(); 
const onClickHandler = () => { 
	focusPoint.current.value = 
	"LEarning useRef hook"; 
	focusPoint.current.focus(); 

  console.log(myRef.current.value);
}; 
return ( 
	<Fragment> 
	<div> 
		<button onClick={onClickHandler}> 
		ACTION 
		</button> 
	</div> 
	<label> 
	Click on the action button to 
	focus and populate the text. 
	</label><br/> 
	{/* <textarea ref={focusPoint} />  */}
  <input type="text" ref={myRef} />
  <button onClick={onClickHandler}></button>
	</Fragment> 
)
} 

export default App;
