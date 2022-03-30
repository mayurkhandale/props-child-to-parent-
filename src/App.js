import React,{useState}from "react";
import "./style.css";
import Header from "./Components/Header";

export default function App() {
  const [state,setState]=useState('')
  const HandleClick=(s)=>{
    console.log(s,"88")
    setState(s)
  }
  return (
    <div>
     <Header value='Header1' state={state} HandleClick={HandleClick}/> 
      <Header value='Header2'  state={state} HandleClick={HandleClick}/>
      <Header value='Header3'  state={state} HandleClick={HandleClick}/>
      <p>{state}</p>
    </div>
  );
}
