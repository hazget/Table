import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './Routes'
import {useAuth} from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import {Navbar} from './components/NavBar'
import 'materialize-css';

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);
  return (
  <AuthContext.Provider value={{
    token, login, logout, userId
  }}>
  <Router>
    {isAuthenticated && <Navbar/>}
    <div className="container">
        {routes}
    </div>
  </Router>
  </AuthContext.Provider>
   );
}

export default App;


