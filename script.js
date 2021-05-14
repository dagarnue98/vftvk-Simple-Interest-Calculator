function compute()
{
    //Principal function for operate
    
    var principal = (document.getElementById("principal").value);
    var rate= (document.getElementById("rate").value);
    var years = (document.getElementById("years").value);
    var interest= principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    //Asociate the result 
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",<br/>" +
        "at an interest rate of " + rate + ",<br/>" +
        "You will receive an amount of " + interest + ",<br/> " +
        "in the year "+ year ;
    
}
//Function to update the interval Rate
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    

}
//Function to advise if the introduced amount its more than 0
function correctAmount() {
    var principal = document.getElementById("principal").value;
    var more0 = (principal) > 0;
    if (!more0) {
        alert("You cant enter negative numbers or 0 , please enter a Positive Amount");
        document.getElementById("principal").focus();
    }
} 