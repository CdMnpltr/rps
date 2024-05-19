/*save chatGPT log for this project */
let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor( Math.random() * choices.length)];
}

function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    const picks = prompt('Enter your choice').toLowerCase();
    if (validChoices.includes(picks)) {
        return picks;
    } else {
        return null; // Indicate invalid choice
    }
}
function playGame() {
    for (let i = 1; i <=5; i++) {
        function playRound(humanChoice, computerChoice) {
            if (humanSelection === computerSelection) {
                alert('It\'s a tie');
            } else if (humanSelection === null) {
                alert('Please choose between rock, paper, or scissors');
            } else if (humanSelection === 'rock' && computerSelection === 'paper') {
                alert('Your opponent picked paper');
                computerScore++;
            } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
                alert('Your opponent picked scissors');
                computerScore++
            } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
                alert('Your opponent picked rock');
                computerScore++;

            } else {
                alert('Your choice wins');
                humanScore++;
            }
        } console.log(humanScore, computerScore);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
}   if (humanScore > computerScore) { 
        alert('You win!');
    } else if (humanScore === computerScore) {
        alert('It\'s a draw. Play again!')
    } else {
    alert('Your opponent won'); 
    } 
    
} 
 
     // both score variables above are hidden from global scope so it wont work as intended. Use chat hints to figure out how to access both score variables within playGame()

playGame();

/* --
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
       if (humanSelection === computerSelection) {
           alert('It\'s a tie');
       } else if (humanSelection === null) {
           alert('Please choose between rock, paper, or scissors');
       } else if (humanSelection === 'rock' && computerSelection === 'paper') {
        alert('Your opponent picked paper');
        computerScore++;
       } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        alert('Your opponent picked scissors');
       } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
        alert('Your opponent picked rock');
        computerScore++;

       } else {
           alert('Your choice wins');
           humanScore++;
       }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

-- */


/* function gethumanChoice() {

    let picks;

    if (picks !== 'rock' && picks !== 'paper' && picks !== 'scissors') {
        alert('Please choose between rock, paper, scissors');
    } return prompt('Enter your choice')
    
} */



//console.log(picks);
 

/*PseudoCode 

Step 1
Create function getComputerChoice
    - within, create code that returns random string: 'rock', 'paper', 'scissors' (can use Math.random)

    -- code below --
    
    function getComputerChoice () {

    }

    (Conditional: use Math.random to create randomizer

        - create index with rock paper scissors as value (choices)
        - use mathRandom to pick out random value from index

    -- code below

    const choices = [rock, paper, scissors];

    function getComputerChoice() {
        Math.floor( Math.random() * choices.length);
    }

    // concat code below
const choices = [rock, paper, scissors];

    function getComputerChoice() {
        Math.floor( Math.random() * choices.length);


Step 2 
Create function getHumanChoice

        function getHumanChoice() {

        }
Write code that will return valid choices depending on user input.
        - create a prompt that stores user input into function getHumanChoiceO()

            let picks = prompt( 'Enter your choice' );

        - make conditional that only accepts strings rock, paper, scissors -- see live code above --

Step 3
Create two new variables: humanScore and computerScore - initialize both with value of 0


Step4
Write Logic to play one round
    - Create function named playRound
        function playRound()
    - Define two parameters for playRound:humanChoice and computerChoice
        function playRound(humanChoice, computerChoice)
    - Make variable

    function playRound(humanChoice, computerChoice) {
        // write logic of which string values win after selection and what happens after identical selection  -- code below --
        // Logic to determine the winner based on the choices

        if (humanSelection === computerSelection) {
            alert('It's a tie')
        }
        -- the rest in live code --
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

Step5
Write logic for game of 5 rounds

    function playGame() {

    }
    - move playRound() and score variables inside playGame:
        function playGame() {
            let humanScore = 0;
            let computerScore = 0;

            function playRound(humanChoice, computerChoice) {
                if (humanSelection === computerSelection) {
                    alert('It\'s a tie');
                } else if (humanSelection === null) {
                    alert('Please choose between rock, paper, or scissors');
                } else if (humanSelection === 'rock' && computerSelection === 'paper') {
                    alert('Your opponent picked paper');
                    computerScore++;
                } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
                    alert('Your opponent picked scissors');
                } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
                    alert('Your opponent picked rock');
                    computerScore++;

                } else {
                    alert('Your choice wins');
                    humanScore++;
                }
            }
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

        }
*/




