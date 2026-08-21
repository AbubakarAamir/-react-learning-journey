
import { useState } from "react";
import MyImage from "./MyImage";

function ToggleButton(){
 
    const [name,setname] = useState (true);

    return(
        <>
        
        <h1>Toggle Button Practise (ON|OFF)</h1>
        <button onClick={()=>setname(!name)} ON OR OFF
            style={{color:"blue", fontSize:10,borderRadius:10,cursor:"pointer",padding:10}}
            
            >Click me </button>
        <br />
        {
            // name?<h1>Abubakar Aamir</h1>:null
            name?<MyImage/>:null
        }


        </>
    )
}
export default ToggleButton;