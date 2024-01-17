import Cookies from "js-cookie"

import { createContext, useContext, useEffect,useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

  useEffect(() => {
     const storedCookie= Cookies.get('jwt');
     if(storedCookie){
        setToken(storedCookie)
     }else{
        console.log("No ACCESS TOKEN")
     }
  }, []);


  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={{token,setToken}}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;