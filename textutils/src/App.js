
import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const[mode, setMode] = useState('light')

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>    
    <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading="Enter your text to analyse" mode={mode}/>
      {/* <About mode={mode}/> */}
    </div>
    

    </>
    
  );
}

export default App;
