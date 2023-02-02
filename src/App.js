import React, { useEffect, useState } from 'react';

import Login from './TypicalPageComponents/Login/Login';
import Home from './TypicalPageComponents/Home/Home';
import MainHeader from './TypicalPageComponents/MainHeader/MainHeader';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');;;;;;;

    if(storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
  }, []);   // 의존성 배열이 변경되는 경우에만 실행, 비어있으니 최초 한번만 실행

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');                                   
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
