let number=Math.floor(Math.random()*100)+1;
console.log(number);
let attemptleft=20;
let highscore=0;

document.querySelector('.checkbtn').addEventListener("click",function(){
    const guess= Number(document.querySelector(".inputnum").value);
console.log(guess);

if(!guess){
    document.querySelector(".start").textContent='🚫 No Number';
}
else if(guess===number){
    console.log(guess)
    document.querySelector(".qm").textContent=number;
    document.querySelector('.start').textContent='correct answer🌷';
    document.querySelector("body").style.backgroundColor="#60b350";
if(attemptleft>highscore){
    highscore=attemptleft;
}
document.querySelector('.score1').textContent=highscore;
}
else if(guess!=number){
if(attemptleft>=1){
   if(guess>number){
    document.querySelector('.start').textContent='📈TOO HIGH!';
   }
   else{
    document.querySelector('.start').textContent='📉TOO LOW!'; 
   }
    attemptleft--;
    document.querySelector('.initialscore').textContent=attemptleft;
}
else{
    document.querySelector('.start').textContent='You lost the game';
    document.querySelector('.score1').textContent=0;
    document.querySelector('body').style.backgroundColor="#ff0000";
        }
    }
}
);

document.querySelector('.butt').addEventListener("click",function(){
attemptleft=20;
number=Math.floor(Math.random*100)+1;
document.querySelector(".initialscore").textContent=attemptleft;
document.querySelector(".start").textContent="Start Game....";
document.querySelector(".qm").textContent="?";
document.querySelector("body").style.backgroundColor="#000";
document.querySelector(".inputnum").value=null;
});
