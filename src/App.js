import React, { useContext }from 'react';

import Login from './TypicalPageComponents/Login/Login';
import Home from './TypicalPageComponents/Home/Home';
import MainHeader from './TypicalPageComponents/MainHeader/MainHeader';
import AuthContext from './TypicalPageContext/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
