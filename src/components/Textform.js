import React,{useState} from 'react'



export default function Textform(props) {
    const [text,setText] = useState('');

    const handleonchange = (event)=>{        
        setText(event.target.value)
        
    }
    
    const upperbtnclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.alertfun("Convert To UPPER CASE", "success")
    }

    const lowerbtnclick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.alertfun("Convert to lower case", "success")
    }

    const clearbtnclick = (event)=>{
        setText("")
        props.alertfun("Text Box Is Clear", "danger")

    }

    const altbtnclick = ()=>{
        let newText = text.toLowerCase().split("");
         for (let i = 1; i < newText.length; i += 2) {
        newText[i] = newText[i].toUpperCase();
         }
        setText(newText.join(""));
        props.alertfun("Convert to aLtErNaTiVe cAsE", "success")

    }

    const rmvspcbtnclick = ()=>{
        let newtext = text.replace(/\s+/g,' ');
        setText(newtext)
        props.alertfun("Extra Spaces Has Been Removed", "success")

    }

    const cpybtnclick = ()=>{
        let textarea = document.getElementById("exampletext")
        textarea.select()
        navigator.clipboard.writeText(textarea.value)
        props.alertfun("Copy To Clipboard", "success")

    }


  return (
    <>
    <div className="container my-5" >
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1"  className="form-label mx-3">{props.heading}</label>
        <textarea className="form-control" onChange={handleonchange} value = {text} id="exampletext" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={upperbtnclick} >Convert to UPPER CASE</button>
        <button className="btn btn-primary mx-1" onClick={lowerbtnclick} >Convert to  lower case</button>
        <button className="btn btn-primary mx-1" onClick={altbtnclick} >Convert to aLtErNaTiVe cAsE</button>
        <button className="btn btn-primary mx-1" onClick={clearbtnclick} >Clear Text Area</button>
        <button className="btn btn-primary mx-1" onClick={rmvspcbtnclick} >Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={cpybtnclick} >Copy Text</button>


    </div>
    <div className="container my-2">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h5>Reading Time</h5>
        <p>{0.005*text.split(" ").length}</p>
        <h3 className="my-3">Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
