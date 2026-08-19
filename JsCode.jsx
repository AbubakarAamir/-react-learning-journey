function JsCode() {
    // jo bhi value deni ha varaible ko wo retrun se phele he kro function bhi 
    const stdname = "Abubakar";
    let age = 22;
    let x = 220;
    let y = 22;
    // simple function
    function province() {
        alert("karachi");
    }
    // function with arguments 
    function Calculator(a, b) {
        return a + b;
    }

    // function with multiple conditions 
    function Conditions(m, n, op) {
        if (op == "+") {
            return m + n;
        }
        else if (op == "-") {
            return m - n;
        }
        else if (op == "*") {
            return m * n;
        }
        else (op == "/");{
            return m / n;
        }


    }

     const empolyees={
        name : "abubakar",
        salary :23000,
        year :21
     };

     let Myimage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0za4CYSuVqLbcc9DRQkk5dI09rDS8Kxgtg&s";

 let Colors = ["red", "yellow","green", "pink"];
    return (
        <>
            <h1>Javascript Codes Run in JSX</h1>

            <h1>Sir Abubakar are here</h1>
            <img src={Myimage} width="300px" alt="" />
         
            <h2>{stdname} is a undergraduate student and he is {age} years old</h2>
            <h2>Ternary operator  are here :{stdname?stdname:"user is not found"}</h2>
            <h2>The semester fees of a Ku student is {x * y}</h2>
            {province()}
            <h2>The result value of A and B is :{Calculator(200, 300)}</h2>

            <h2> Multiple conditions practise:{Conditions(10,20,"*")} </h2>
            <h2>Objects practise  :{empolyees.name} ,{empolyees.salary}</h2>
           <h2>parctise of arrays :{Colors[2]}</h2>
        </>
    )
}
export default JsCode;