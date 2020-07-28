import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/Shared/MyButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          Learn React
      </header>
     
      <MyButton label="Increment" clicked={}   ></MyButton>
    </div>


  );
}

export default App;
