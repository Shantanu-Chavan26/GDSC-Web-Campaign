
//Data types:
alert("Hello World")

typeof(1); // Tells the data type of the data.

var name = prompt("What is your name?");
alert("Hello!" + " " + name);

var result = addNumbers(5, 3);

console.log(result); 


var n = Math.random();
n = n*6;
n = Math.floor(n) + 1;
alert("Your Dice Roll was:"+ " " + n);




// ***Functions***


function ShambhuTrip() {
    alert("Utho");
    alert("Bunk maaro");
    alert("Shambhu jao");
}

ShambhuTrip();

// PARAMETER FUNCTION

function ShambhuTrip(Freeperiod) {
    if(Freeperiod)
    {
    alert("Utho");
    alert("Class se bahar jao");
    alert("Bunk karo");
    alert("Shambhu jao");}

    else 
    {
      alert("Padhle Bhai :) ");
    }
}~~
var Freeperiod = false;

var Result = ShambhuTrip(Freeperiod);


//return Function
function ShambhuTrip(hasFreePeriod) {
    if (hasFreePeriod) {
        return "Utho, Bunk maaro, Shambhu jao";
    } else {
        return "No free period, can't go on a Shambhu trip!";
    }
}

var hasFreePeriod = true; // or false depending on whether there's a free period
var tripDescription = ShambhuTrip(hasFreePeriod);
alert(tripDescription);






// ***Callback Funtions***
setTimeout(function()
{
    console.log("2 second baad chaloe")
}, 2000);


// Document Object Model

// Eg.1
var click = document.getElementById("myButton");
click.onclick = function()
{
    alert("I got clicked");
}


//Eg2
var change = Document.getElementById("Dom");
change.innerHTML = "Hello GDSC";




var fruitList = document.getElementById("fruitList");


fruitList.textContent = "List of Vegetables";


var newItem = document.createElement("li");
newItem.textContent = "Carrot";
fruitList.appendChild(newItem);


var fruits = document.querySelectorAll(".fruit");


fruits.forEach(function(fruit) {
    fruit.textContent = fruit.textContent.toUpperCase();
});



