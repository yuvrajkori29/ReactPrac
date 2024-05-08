import Home from "./RouterComponents/Home";
import LandingPage from "./RouterComponents/LandingPage";
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import About from "./RouterComponents/About";
import Career from "./RouterComponents/Career";
import HomeMain from "./RouterComponents/HomeMain";
import Contact from "./RouterComponents/Contact";

const first = createBrowserRouter([
     {
      path : "/" ,
      element:  <LandingPage/>
     },
     {
      path : "/home" ,
      element:  <Home/>,
      children :[
        {
          path : "/home/" ,
      element:  <HomeMain/>

         },
         {
          path : "/home/about" ,
      element:  <About/>

         },
      {
        path : "/home/career" ,
        element:  <Career/>
      },
      {
        path : "/home/contact" ,
        element:  <Contact/>
      }
         
      ]
     }
]);

const App = () => {
  return (
    <RouterProvider router={first}></RouterProvider>
  )
}

export default App;