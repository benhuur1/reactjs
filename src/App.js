import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="login/*" element={<Login />} />
              <Route
                exact
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route exact path="foto/:id" element={<Photo />} />
              <Route exact path="perfil/:user" element={<UserProfile />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </HashRouter>
    </div>
  );
}

export default App;
