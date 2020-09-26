var random_num =Math.floor((Math.random()*6)+1);
var random_num2=Math.floor((Math.random()*6)+1);
if(random_num>random_num2){
    document.querySelector("h1").innerHTML="&#128681player1wins";
}
else if(random_num2>random_num){
    document.querySelector("h1").innerHTML="player2wins&#128681";
}
else if(random_num===random_num2){
    document.querySelector("h1").innerHTML="Tie";
}
document.querySelector(".img1").setAttribute("src","images/dice"+random_num+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+random_num2+".png");

