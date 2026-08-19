import React from 'react'

function Components() {
    return (
        <>
            <h1>Hello We are practising React </h1>
            <hr />
            <br />
            <h2>We have employees Name : </h2>
            <ul>
                <li>Name: Zain</li>
                <li>Name: Haider</li>
                <li>Name: Osama</li>
                <li>Name: maqsood</li>
            </ul>
            <hr /><br />
            <h2> Now we list down all the cities Names  of Pakistan</h2>
            <Cities />
            <hr />
            <h2> Now we offer this courses </h2>
            <Courses />

        </>
    )
}


function Cities() {
    return (
        <>
            <h3>Cities of Pakistan</h3>
            <ol>
                <li>Karachi</li>
                <li>Lahore</li>
                <li>Quetta</li>
                <li>Islamabad</li>
            </ol>
        </>
    )
}


function Courses() {
    return (
        <>
            <h3>  1:Course: Web development
                <br />
                2:Course: Digital marketing
                <br />
                3:Course: App development
                <br />
                4:Course: Java development
                <br />
                5:Course: React Development
                <br />
                6:Course: C++ development
            </h3>
        </>
    )
}

export function University(){
    return(
        <>
        <h2>University Names are given below :</h2>
        <ol>
            <li>Karachi Univeristy</li>
            <li>IBA</li>
            <li>Sir syed University</li>
            <li>Federal Univerity</li>
            <li> Iqra University </li>
        </ol>
        </>
    )
}


export default Components;