import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contato">
          <Contato/>
        </Route>
        <Route exact path="/sobre">
          <Sobre/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
