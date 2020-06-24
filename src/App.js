import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
        {/* <Greet name = "Nick">
          <p>Hey, what's up?</p>
          <h3>Nopeeeee</h3>
        </Greet>
        <Greet name = "Him">
          <button>Action</button>
        </Greet>
        <Greet name = "Seth"/>
        

        <Welcome name="Nick"/>
        <Welcome name="Him"/>
        <Welcome name="Seth"/> */}

        <Message />
    </div>
  );
}

export default App;
