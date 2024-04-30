

function Login() {
  return (
    <form className="border-[1px] border-black p-3 rounded-md">
     <div className="py-2">
     <h2 >Login Form</h2>
     <label htmlFor="userEmail" className="flex flex-col text-[1rem] my-1"> User Email : </label>
         <input type="email" id="userEmail" required placeholder="enter email" className="px-2"></input>
     </div>


     <div>
     <label htmlFor="userPassword" className="flex flex-col text-[1rem] my-1"> User Email : </label>
         <input type="email" id="userEmail" required placeholder="enter email"></input>
     </div>


        
    </form>
  )
}

export default Login