import React, {useState}from 'react'

export default function TextForm(props) {
  
  const handleUpClick= ()=>{
    // console.log("UpperCase button was clicked" + text);
    let newText=text.toUpperCase();
    // settext(newText);
    setResult(newText);
    props.showAlert("Changed to Upper Case","success");
  }
  const handleLoClick= ()=>{
    // console.log("UpperCase button was clicked" + text);
    let newText=text.toLowerCase();
    // settext(newText);
    setResult(newText);
  }
  const handleClearClick= ()=>{
    // console.log("UpperCase button was clicked" + text);
    let newText="";
    settext(newText);
    setResult(newText);
  }

  const handleOnChange= (event)=>{
    // console.log("On Change");
    settext(event.target.value);
  }

  //copy text
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const [text, settext] = useState("");
  const [result, setResult] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='light'?'black':'white'}}>    
          <h1>{props.heading}</h1>   
  
          <div className="mb-3">            
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
          
          <div className="mb-3 mt-3">
            <h2>Result:</h2>          
            <textarea className="form-control" value={result} readOnly id="resultBox" rows="8" style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
          </div>        
      </div>

      <div className="div container" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>  
      </div>    

    </>
  )
}
