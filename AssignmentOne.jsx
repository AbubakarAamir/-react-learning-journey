import { useState } from "react";

function AssignmentOne(){

    const[num,setnum] = useState(0);
    return(
        <>
        <h1>Counter Hit to increase the value:</h1>
        <h2>Counter intial value is :{num}</h2>
        <button   onClick={()=>setnum(num+1)}  >Plus to increase</button>
        <br />
       <button onClick={()=>setnum(num-1)}>Minus to decrease </button>
       <br />
       <button onClick={()=>setnum(num*5)}>Mulyiply  the double</button>
       <br />
       <button onClick={()=>setnum(num/1)}>Division the number</button>
        </>
    )
}
 export default AssignmentOne;