'use strict'
//Heath's Team
let HeathScore=[89,120,103]
console.log(HeathScore)
let averageHeath=(89+120+103/3)

//Zane Team
let ZaneScore=[116,94,123]
let averageZane=(116+94+123/3)

//average
console.log('Average Score of Heaths team is'+   averageHeath)
console.log('Average Score of Zane team is   '+  averageZane)
// winning team
if(averageHeath>averageZane)
{
    console.log('Winner is Heaths Team')
}
else if(averageHeath<averageZane) {
    console.log('Winner is Zanes Team')
}
else{
    console.log('Match is drawn')
}
//New scores
let NewheathScore=[234,196,824,154,678]
let NewaverageHeath=(234,196,824,154,678/5)
let NewzaneScore=[234,196,824,154,678]
let NewaverageZane=(234+824+196+154+678/5)
//average
console.log('Average Score of Heaths team is'+   NewaverageHeath)
console.log('Average Score of Zane team is   '+  NewaverageZane)
//calculation who is the winner
if(NewaverageHeath>NewaverageZane)
{
    console.log('Winner is Heaths Team')
}
else if(NewaverageHeath>NewaverageZane) {
    console.log('Winner is Zanes Team')
}
else{
    console.log('Match is drawn')
}
//extra player Marish added
let Marish=[97,134,105]
console.log(Marish)
let MarishAverage=(97+134+105/3)
console.log('average of Mainshs Team is '+MarishAverage)
//decision
if(averageHeath&&averageZane<MarishAverage)
{
    console.log('Winner is MarishTeam')
}
else if(averageHeath&&MarishAverage<averageZane)
{

    console.log('Winner is Zanes team')

}
else if(averageZane&&MarishAverage<averageHeath)
{
    console.log('Winner is Heaths team')
}
else if(averageHeath&&averageZane==MarishAverage)
{
    console.log('No winning team')
}
else{
    console.log('replay the match')
}
