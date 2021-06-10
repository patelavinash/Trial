import React from 'react';
const Evenodd = () =>
{
    function EOChecker()
    {
        var n=document.getElementById("EO").value;
        if(n%2==0)
        {
            document.getElementById("p1").innerHTML=n + " is an even number";
        }
        else{
            document.getElementById("p1").innerHTML=n+ " is an odd number";
        }
    }   
    return(
    <>
        <h1>Even odd checker</h1>
        <div className="form-group">
            <label for="EO">Enter any number</label>
            <input className="form-control" type="number" id="EO" placeholder="Enter any number"/>
        </div>
        <button type="button" className="btn btn-info" onClick={EOChecker}>Click here to check</button>
        <p id="p1" className="display-4 text-success">Output will be displayed here</p>
    </>
    );
};

export default Evenodd;