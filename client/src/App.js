import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LongCard from "./components/LongCard";
import ShortCard from "./components/ShortCard";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <main className="container is-flex is-flex-direction-column is-align-items-center">
        <Login></Login>
        <SignUp></SignUp>
        <ShortCard></ShortCard>
        <LongCard></LongCard>
      </main>
    </div>
  );
}

export default App;
