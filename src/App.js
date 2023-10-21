// import logo from './logo.svg';
import React from  "react";
import './App.css';

import Board from "./Components/Board/Board";
import API from "./Components/API/API";

function App() {
  return (
    <div className="App">
        <div>
          <API />
        </div>

        <div className="app_navbar">
            <h2>Schedule CRUD ReactJS</h2>
        </div>
        <div className="app_outer">
            <div className="app_boards" style={{height:"100%"}}>
                <Board />
                <Board />
                <Board />
                <Board />
                <Board />
            </div>
        </div>  
    </div>
  );
}

export default App;
