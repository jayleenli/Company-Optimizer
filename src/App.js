import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <div className="bodyComponent">
                <p>What are you optimizing for?</p>
                <SearchBar/>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
