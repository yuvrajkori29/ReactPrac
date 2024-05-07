import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
  <>
    {/* <h1 className="mb-4">Landing Page</h1>
    */}


   <div>
      <section className="flex w-[100vw] h-[100vh]"> 
         <div>
            <img className="w-[100vw] h-[100vh]" src="\src\assets\wp9839194.jpg" ></img>
         </div>
         <div className="p-4 ">
            <p >Sara Tendulkar (born October 12, 1997) is an Indian nutritionist, model, internet personality,
             and social media influencer. She is recognized as the daughter of the legendary Indian cricketer Sachin Tendulkar.</p>
            
            <p>
                
            </p>
             <p>     <Link to={'/home'} className="bg-blue-400 py-1 px-4 rounded-md" >Get Started </Link>  </p>
        
         </div>
        
      </section>
   </div>

</>

  )
}

export default LandingPage