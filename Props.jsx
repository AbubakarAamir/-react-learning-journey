import React from 'react'

function Props({empname,age,address,email,empcity}) {
    ;
  
    
  return (
    <div>
        <h1>Props in React </h1><br /><hr />
        <h2>Name : {empname}</h2><br /><hr />
        <h2>Age :{age}</h2><br /><hr />
        <h2>Address :{address}</h2><br /><hr />
        <h2>Email : {email}</h2><br /><hr />
        <h2>City : {empcity}</h2>
    </div>
  )
}




export default Props;
