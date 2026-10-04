import React from 'react';
import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Board } from './pages/Board/Board';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/board' element={<Board />}></Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
