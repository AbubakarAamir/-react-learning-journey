import { useState } from "react";

function StateInReact(){

    const[city,setcity] = useState("karachi");

    // function changecity(){
    //     setcity("lahore");
    // }

    return(
        <>
        <h1>States in React</h1>
        <h1>{city}</h1>
        {/* <button On onClick={changecity}> Press me </button> */}
        <h2>Choose city</h2>

        <button On onClick={()=>setcity("lahore")}>Change City</button>
        <br />
        <button onClick={()=>setcity("Quetta")}>Change city</button>
         <br />
          <button onClick={()=>setcity("islamabad")}>Change city</button>
        <br/>
        <button On onClick={()=>setcity("karachi")}>Change to karachi Press now</button>
        </>
    )
    
}
 export default StateInReact;