var fruits = ["Banana", "Orange", "Mango", "Coconut"];

function loadFruits() {
    document.getElementById("fruits").innerHTML = fruits;
}
function myFunction() {
    var fruit = prompt("what's yout favorite fruit?");
    fruits[fruits.length] = fruit;
    document.getElementById("fruits").innerHTML = fruits;
}