import React from 'react';

const Header= (props) => {
 // some more examples in props  k
 // now if we click on header 1 display header1 if click header 2 display header2 if we click header3 display header
 console.log(props)
 const HandleClicks=(s)=>{
  console.log(s)
  props.HandleClick(s)
 } 
  return (
    <>
    <button onClick={()=>HandleClicks(props.value)}><h3>{props.value}</h3>
    </button>     
    </>
  );
}

export default Header;