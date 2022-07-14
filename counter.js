var counterValue = 0;


document.addEventListener("DOMContentLoaded", function(event) 
{
    counterValue = sessionStorage.getItem("counter")
    if(counterValue>0){
        counterValue--
    }
    updateDisplay(counterValue)
    console.log("countervalue is: " + counterValue );
})

function incrementClick() {
    updateDisplay(++counterValue);
    //if(counterValue > 0){
        increaseCounterCookie();
    //}
}

function resetCounter() {
    counterValue=0;
    updateDisplay(0);
    sessionStorage.setItem("counter", 0);
    //console.log("counter cookie is: " + sessionStorage.getItem("counter") )

}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
    //console.log("from inside updateDisplay. val is: " + val)
}

function increaseCounterCookie() {
    // if(sessionStorage.getItem("counter") == null){
    //     sessionStorage.setItem("counter", "0");
    // }
        
    //counterValue = Number(sessionStorage.getItem("counter"))
    sessionStorage.setItem("counter",counterValue + 1);

    //console.log("Counter Value:",  sessionStorage.getItem("counter"));
}