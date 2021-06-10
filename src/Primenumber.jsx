import React from 'react';

const Primenumber = () =>
{
    function primeChecker()
    {
        var p=document.getElementById("PC").value;
        var isPrime=true;
        var i;
        if(p<2)
        {
            document.getElementById("p2").innerHTML="1 is neither prime nor composite";
        }
        else
        {
            for(i=2;i<p;i++)
            {
                if(p%i==0)
                {
                    isPrime=false;
                    break;
                }
            }
        }
        if(isPrime==true && p>1)
        {
            document.getElementById("p2").innerHTML=p+" is a Prime Number"
        }
        else if(isPrime==false && p>1)
        {
            document.getElementById("p2").innerHTML=p+" is a Composite Number"
        }
    }
    return(
        <>
            <h1>Voter Eligiblity check</h1>
            <div className="form-group">
                <label for="PC">Enter any number</label>
                <input className="form-control" type="number" id="PC" placeholder="Enter any number"/>
            </div>
            <button type="button" className="btn btn-info" onClick={primeChecker}>Click here to check</button>
            <p id="p2" className="display-4 text-success">Output will be displayed here</p>
        </>
    );
};

export default Primenumber;