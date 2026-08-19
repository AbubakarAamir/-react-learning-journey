import { useState } from "react";

let age = 11;
function Assignmenttwo() {

    const [intialvalue, setvalue] = useState(0);
    const [firstname, setname] = useState("Abubakar");

    return (
        <>

            <h1>Now we are practising  UseStatehook  in react</h1>
            <button style={{ color: 'pink', width: 150, height: 50, cursor: 'pointer', padding: 10, background: `red`, borderRadius: 15, font: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 500, marginTop: 50 }}
                onClick={() => {
                    alert("Thanks sir for chossing our institute...");
                    prompt("Please sir enter your name here for confirmation ");
                    if (age >= 18) {
                        console.log("Sorry sir this offer is for youngers");
                    }
                    else {
                        console.log("Please wait sir ");
                    }


                }}>Click Here to start</button>

            <br /><hr />

            <h2>Now  we are practising usestate hook</h2>
            <br />
            <p>The intial value is {intialvalue}</p>

            <button style={{ color: 'pink', width: 150, height: 50, cursor: 'pointer', padding: 10, background: `red`, borderRadius: 15, font: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 500, marginTop: 50 }} onClick={() => {
                setvalue(intialvalue + 1);
            }}  >Press me </button>


            <h3>If you press this button  the intial value come</h3>
            <button style={{ color: 'pink', width: 150, height: 50, cursor: 'pointer', padding: 10, background: `red`, borderRadius: 15, font: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 500, marginTop: 50 }}

                onClick={() => { setvalue(0) }}

            >Reset value</button>
            <br /><br />

            <h2 style={{ color: "white", font: 20, fontFamily: "sans-serif" }}>Now We change the  Name using usestatehook</h2>
            <br />

            <p>The Firstname is : {firstname}</p>

            <button style={{ color: 'pink', width: 150, height: 50, cursor: 'pointer', padding: 10, background: `red`, borderRadius: 15, font: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 500, marginTop: 50 }} onClick={() => {
                setname("Yahya")
            }}     >Change name</button>

            <br />
            <button style={{ color: 'pink', width: 150, height: 50, cursor: 'pointer', padding: 10, background: `red`, borderRadius: 15, font: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 500, marginTop: 50 }} onClick={() => {
                setname("Abubakar")
            }}     >Reset name </button>








        </>
    )
}

export default Assignmenttwo;