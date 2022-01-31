function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){alert("Enter a positive number")
    
    document.getElementById("principal").focus();
    return compute;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("text1").innerHTML="If you deposit";
    document.getElementById("principal1").innerHTML=principal+",";
    document.getElementById("text2").innerHTML="at an interest rate of";
    document.getElementById("rate1").innerHTML=rate;
    document.getElementById("text3").innerHTML="You will receive an amount of";
    document.getElementById("interest1").innerHTML=interest+",";
    document.getElementById("text4").innerHTML="in the year";
    document.getElementById("year1").innerHTML=year;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function highlight(text){
	
}

        
