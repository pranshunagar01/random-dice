var randomNumber1 = Math.random();
randomNumber1 = Math.ceil(randomNumber1*6);
var address1 = "images/dice"+randomNumber1+".png";
document.querySelector(".dice img").setAttribute("src", address1);
var randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2*6);
var address2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", address2);
var winner;
if(randomNumber1>randomNumber2){
  winner="Player 1 Wins!";
}
else if (randomNumber1<randomNumber2) {
  winner="Player 2 Wins!";
}
else{
  winner = "Draw!";
}
document.querySelector(".container h1").innerHTML = winner;
