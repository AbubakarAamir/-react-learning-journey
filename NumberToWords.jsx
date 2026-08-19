import { useState } from "react";

function NumberToWords(){

const [number,setnumber] = useState(0);
    return(
        <>
        <h1>Number To Words</h1>
        <h1>{number}</h1>
        <button on onClick={()=>setnumber(number+1)}>PLUS</button><br />
        <button onClick={()=>setnumber(number-1)}>MINUS</button><br />
        <button onClick={()=>setnumber(0)}>RESET</button>
        <h1>Range is (0 to 5)</h1>

{
    number==0?<h1>Zero</h1>
    :number==1?<h1>One</h1>
    :number==2?<h1>Two</h1>
    :number==3?<h1>Three</h1>
    :number==4?<h1>Four</h1>
    :number==5?<h1>Five</h1>
    :number==20?<h1>Abubakar bhai bus krjao</h1>
    :<h1>Out of Range</h1>
   
}

        </>

    )
}
 export default NumberToWords;