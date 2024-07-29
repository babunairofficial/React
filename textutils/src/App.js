
import './App.css';

let name = "babu";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolore, nesciunt amet ex in saepe deleniti cupiditate consequuntur repudiandae aut esse neque fugiat incidunt atque vel nihil corporis ut. Non repellat ex aliquid hic?
      </p>
    </div>
    </>
    
  );
}

export default App;
