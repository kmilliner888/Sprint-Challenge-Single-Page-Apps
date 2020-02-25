import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';


const App = () => {
  return (
    <main>
      <Header />
      <Route 
        exact path='/'
        component={WelcomePage}
      />
      <Route
        path='/characters'
        component={CharacterList}
      />
    </main>
  );
}

export default App;
