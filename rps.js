const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        return choices[Math.floor( Math.random() * choices.length)];
    }
console.log(getComputerChoice());

/*PseudoCode 

Block 1
Create function getComputerChoice
    - within, create code that returns random string: 'rock', 'paper', 'scissors' (can use Math.random)

    -- code below --
    
    function getComputerChoice (rock, paper, scissor) {

    }

    

    (Conditional: multiply Mathrandom by 100 then add 1 and create conditional (||?) that falls between 0-32(rock), 33-62(paper), 63-99(scissor)). 

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

Block 2 (test block 1 before continuing...)

*/

