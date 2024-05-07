import Home from "./RouterComponents/Home";
import LandingPage from "./RouterComponents/LandingPage";
import {RouterProvider,createBrowserRouter} from 'react-router-dom';

const first = createBrowserRouter([
     {
      path : "/" ,
      element:  <LandingPage/>
     },
     {
      path : "/home" ,
      element:  <Home/>
     }
]);

const App = () => {
  return (
    <RouterProvider router={first}></RouterProvider>
  )
}

export default App;