import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {

let [mode,setmode] = useState('light')
let [textcolor,setcolor] = useState("dark")
const [alert,setalert] = useState(null)

const alertfun = (message,type)=>{
setalert({
msg:message,
type:type
})
setTimeout(() => {
  setalert(null)
}, 2000);
}



let togglemode = ()=>{

  if(mode === "light"){
    setmode("dark")
    setcolor("light")
    document.body.style.backgroundColor = "#0d0d32"
    document.body.style.color = "white"
    document.getElementById("exampletext").style.backgroundColor = "grey"
    document.getElementById("exampletext").style.border = " 2px solid white"
    alertfun("Dark mode Enabled", "success")
  }
  
  else{
    setmode("light")
    setcolor("dark")
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
    document.getElementById("exampletext").style.backgroundColor = "white"
    document.getElementById("exampletext").style.border = " 1px solid #80808038"
    alertfun("Light mode Enabled", "success")

  }
} 

  return (
    <>
    
<Navbar title = "TextUtils" abouttext="About US" togglemode = {togglemode} mode = {mode} textcolor = {textcolor} />
<Alert alert={alert}/>
<Textform heading="Enter Text Here" alertfun = {alertfun}/>
    </>
  );
}

export default App;
