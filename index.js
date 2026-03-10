console.log("Hello World")

let click = document.getElementById("clickMe")
let changeBgBtn = document.getElementById("changeBg")
let reversed = false;
let ifClicked = false;


function clickMe(){
    if(!ifClicked){
        click.textContent= "You Clicked Me!"
        ifClicked = true;
    } else {
        click.textContent= "Click Me!"
        ifClicked = false;
    }

    

    // click.textContent= "You Clicked Me!"
}

function bg(){
    if(!reversed){
        document.body.style.background = "linear-gradient(lightblue, pink)";
        reversed = true;
    } else {
        document.body.style.background = "linear-gradient(pink, lightblue)";
        reversed = false;
    }
}