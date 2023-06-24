var urName=prompt("Enter Your Name");

var urOppName=prompt("Enter Your Opponents Name");

document.querySelectorAll("h3")[0].innerHTML=urName;

document.querySelectorAll("h3")[1].innerHTML=urOppName;

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice"+randomNumber1+".png";

var randomImage="images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="💥⛳ "+urName+" wins";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw ⛳";
}
else{
  document.querySelector("h1").innerHTML="😝⛳ "+urOppName+" wins , Better luck nexttime..";
}
