import React, {useState}from 'react'

export default function TextForm(props) {
  
  const handleUpClick= ()=>{
    // console.log("UpperCase button was clicked" + text);
    let newText=text.toUpperCase();
    // settext(newText);
    setResult(newText);
  }

  const handleOnChange= (event)=>{
    // console.log("On Change");
    settext(event.target.value);
  }

  const [text, settext] = useState("Enter text here");
  const [result, setResult] = useState("");
  return (
    <>
      <div className="container">    
          <h1>{props.heading}</h1>   
  
          <div className="mb-3">            
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          
          <div className="mb-3 mt-3">
            <h2>Result:</h2>          
            <textarea className="form-control" value={result} readOnly id="resultBox" rows="8"></textarea>
          </div>        
      </div>

      <div className="div container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>  
      </div>    

    </>
  )
}
