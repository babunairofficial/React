
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>    
    <Navbar title="Textutils" aboutText="About Textutils"/>
    <div className="container">
      <TextForm heading="Enter your text to analyse"/>
      <About/>
    </div>
    

    </>
    
  );
}

export default App;
