const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor( Math.random() * choices.length)];
}
let picks = prompt( 'Enter your choice' );
console.log(picks);

/*PseudoCode 

Block 1
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

Block 2 
Create function getHumanChoice

        function getHumanChoice() {

        }
Write code that will return valid choices depending on user input.
        - create a prompt that stores user input into function getHumanChoiceO()

            let picks = prompt( 'Enter your choice' );

        - make conditional that only accepts strings rock, paper, scissors 


*/

