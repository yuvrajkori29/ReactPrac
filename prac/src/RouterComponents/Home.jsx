
import Aside from "./Aside"
import Footer from "./Footer"
import Header from "./Header"

import Logo from "./Logo"
import { Outlet } from "react-router-dom"



const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh]" >
     <Header><Logo></Logo></Header>
     <section className="flex">
        <Aside></Aside>
        <div className="bg-grey-300">
        <Outlet></Outlet>
        </div>
        
     </section>
     <Footer></Footer>
    </div>
  )
}

export default Home