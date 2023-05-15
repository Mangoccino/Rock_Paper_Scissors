const options = ['rock', 'paper', 'scissors'];
const resultElement = document.getElementById("result");

    const rockButton = document.getElementById("rock");
    rockButton.addEventListener('click', function() 
    {
        let randomNumber = Math.floor(Math.random() * 3);
        console.log('The computers choice is ' + options[randomNumber])
        if (randomNumber == 0)
        {
            console.log('This is a Tie!')
            resultElement.textContent = "This is a Tie"
        }
        else if (randomNumber == 1)
        {
            console.log('You lose!')
            resultElement.textContent = "You lose!"
        }
        else 
        {
            console.log('You win!')
            resultElement.textContent = "You Win!"
        }

    });

    const paperButton = document.getElementById("paper");
    paperButton.addEventListener('click', function() 
    {
        let randomNumber = Math.floor(Math.random() * 3);
        console.log('The computers choice is ' + options[randomNumber])
        if (randomNumber == 0)
        {
            console.log('You win!')
            resultElement.textContent = "You Win!"
        }
        else if (randomNumber == 1)
        {
            console.log('This is a Tie!')
            resultElement.textContent = "This is a Tie"
        }
        else 
        {
            console.log('You lose!')
            resultElement.textContent = "You lose!"
        }
    });

    const scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener('click', function() 
    {
        let randomNumber = Math.floor(Math.random() * 3);
        console.log('The computers choice is ' + options[randomNumber])
        if (randomNumber == 0)
        {
            console.log('You lose!')
            resultElement.textContent = "You lose!"
        }
        else if (randomNumber == 1)
        {
            console.log('You win!')
            resultElement.textContent = "You Win!"
        }
        else 
        {
            console.log('This is a Tie!')
            resultElement.textContent = "This is a Tie"
        }
    });