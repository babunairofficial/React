
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light')

  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode Activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Activated","success");
    }
  }
  return (
    <Router>    
    <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
                   
          <Route path="/">
          <TextForm heading="Enter your text to analyse" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      
      {/* <About mode={mode}/> */}
    </div>
    

    </Router>
    
  );
}

export default App;
