//Date: 15/05/23

//Declaring variables
const options = ['rock', 'paper', 'scissors'];

const rockButton = document.getElementById("rock");
rockButton.addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(options[randomNumber]);
});