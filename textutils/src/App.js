
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>    
    <Navbar title="Textutils" aboutText="About Textutils"/>
    <div className="div container">
      <TextForm heading="Enter your text to analyse"/>
    </div>
    

    </>
    
  );
}

export default App;
