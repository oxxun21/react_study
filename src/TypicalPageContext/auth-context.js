import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');;;;;;;

    if(storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
  }, []);   // 의존성 배열이 변경되는 경우에만 실행, 비어있으니 최초 한번만 실행

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');    
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return <AuthContext.Provider
    value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler,}}
  >{props.children}</AuthContext.Provider>;
};

export default AuthContext;