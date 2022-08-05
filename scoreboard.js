const displayScore = document.getElementById('nowScore');
const awayScore = document.getElementById('awayScore');
const increaseByOne = document.getElementById('increaseByOne');
const increaseByTwo= document.getElementById('increaseByTwo');
const increaseByThree = document.getElementById('increaseByThree');
const byOne =document.getElementById('ByOne')
const byTwo =document.getElementById('ByTwo')
const byThree=document.getElementById('ByThree')
const homeLead =document.getElementById('home-lead')
const awayLead = document.getElementById('away-lead')
const lead =document.getElementById('lead')
const newGame = document.getElementById('newGame');


let homeScore = 0;

increaseByOne.addEventListener('click', () => {
    homeScore += 1
    displayScore.textContent = homeScore;
    
});

console.log(homeScore)
increaseByTwo.addEventListener('click', () => {
    homeScore += 2
    displayScore.textContent = homeScore;

});

increaseByThree.addEventListener('click', () => {
    homeScore += 3
    displayScore.textContent = homeScore;

});


//Away scoreboard function//
let guestScore = 0 ;
    
byOne.addEventListener('click', () => {
    guestScore += 1
    awayScore.textContent = guestScore;
    
});


byTwo.addEventListener('click', () => {
    guestScore += 2
    awayScore.textContent = guestScore;

});

byThree.addEventListener('click', () => {
    guestScore += 3
    awayScore.textContent = guestScore;

});


newGame.addEventListener('click', () => {
    displayScore.textContent = homeScore = 0;
    awayScore.textContent = guestScore = 0;
})