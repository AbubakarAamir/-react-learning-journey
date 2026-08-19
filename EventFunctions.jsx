// jaise hum javascript mein function call karte ha tu function atajata ha 
// but Event handling mein jab hum OnChange event lagai gae tu usko 
// function defination chaiye wo yeh hoti ha : function myfunction isko bus name chaiye 
// hota ha lekin javascript mein function call chaiye hota ha :function myfunction()  


function EventFunction() {

    function Myfunction() {
        alert("Hello Abubakar you are doing geat things");
    }
    const Capital = () => {
        alert("The capital of pakistan is karachi");
    }

    const City = (cityName) => {
        alert(cityName);
    }
    return (
        <>
            <h1>Event functions in Reactjs</h1>
            <button onClick={Myfunction}>Press Me!</button>
            <button onClick={Capital}>Dont Press Me</button>
            <button onClick={() => City("karachi")}>Press for karachi</button>
            <button On onClick={() => City("Lahore")}>Press for lahore</button>
            <button onClick={()=>City("Pindi")}>Press fir pindi</button>
            <button onClick={()=>City("Islamabad")}>Press for isalamabad</button>
        </>
    )
}
export default EventFunction;