//*********************Player2********************8
var ran2 = (Math.random()*6) +1;
ran2 = Math.floor(ran2);

switch(ran2) {
  case 1:
document.getElementById("Player2dice").src = "images/dice1.png";
    break;
  case 2:
document.getElementById("Player2dice").src = "images/dice2.png";
    break;
  case 3:
document.getElementById("Player2dice").src = "images/dice3.png";
    break;
  case 4:
document.getElementById("Player2dice").src = "images/dice4.png";
    break;
  case 5:
document.getElementById("Player2dice").src = "images/dice5.png";
    break;
  case 6:
document.getElementById("Player2dice").src = "images/dice6.png";
    break;
}
//********************* Player2********************


var ran1 = (Math.random()*6) +1;
ran1 = Math.floor(ran1);

switch(ran1) {
  case 1:
document.getElementById("Player1dice").src = "images/dice1.png";
    break;
  case 2:
document.getElementById("Player1dice").src = "images/dice2.png";
    break;
  case 3:
document.getElementById("Player1dice").src = "images/dice3.png";
    break;
  case 4:
document.getElementById("Player1dice").src = "images/dice4.png";
    break;
  case 5:
document.getElementById("Player1dice").src = "images/dice5.png";
    break;
  case 6:
document.getElementById("Player1dice").src = "images/dice6.png";
    break;
}
//******************Winner Declaration**************************
if(ran1>ran2){
  document.querySelector(".p1h3").textContent = "🏆 Player1 Wins";
}
else if (ran1<ran2) {
  document.querySelector(".p2h3").textContent = "🏆Player2 Wins";

}
else {
  document.querySelector(".p1h3").textContent = "😂 Tie";
  document.querySelector(".p2h3").textContent = "😂Tie";

}
