
import { createContext } from "react"

export const context = createContext();

const fruits = ['Apple','Banana','grapes'];
const MyContext = ({children}) => {

    const user = {
        name : 'rajendra',
        id:1
    }


  return (
    <context.Provider value={{user,fruits}} >{children}</context.Provider>
  )
}

export default MyContext