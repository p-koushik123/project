import {useState,createContext,useContext} from 'react'

 const ThemeContext =createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(false)
     const hand = (the)=>
 {
   if(theme===false){
    setTheme(true);
   }
   else{
     setTheme(false);
    }
 }
    
    return(
        <ThemeContext.Provider value={{theme,hand}}>{children}</ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ThemeContext)
}
