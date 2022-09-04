

var nos = 6;
var colors = [];
var picked;
var squares = document.querySelectorAll(".square");
var cd = document.getElementById("cd");
var msg = document.querySelector("#msg"); 
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");




init();

function init(){
  setupbtn();
  setupsquares();
  redo();
}

function setupbtn(){
  for(var i = 0; i < modebtn.length; i++){
    modebtn[i].addEventListener("click", function(){
      modebtn[0].classList.remove("selected");
      modebtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? nos = 3: nos = 6;    
      redo();
    })
  }
}

function setupsquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){

      var clicked =  this.style.backgroundColor;

      if(clicked === picked){
        msg.textContent = "Correct"
        reset.textContent = "Play Again?"
        cc(clicked);
        h1.style.backgroundColor = clicked
      }else{
        this.style.backgroundColor ="hsl(98, 3%, 5%)";
        msg.textContent = "Try again"
      }
    });
  }
}

function redo(){
  colors = grc(nos);

  picked = pc();

  cd.textContent = picked;
  reset.textContent = "New Colors!"
  msg.textContent = "";
  
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none"
    }
  }
  h1.style.backgroundColor ="steelblue"
}

reset.addEventListener("click", function(){
  redo();
});
 
for(var i = 0; i < squares.length; i++){

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){

      var clicked =  this.style.backgroundColor;

      if(clicked === picked){
        msg.textContent = "Correct"
        reset.textContent = "Play Again?"
        cc(clicked);
        h1.style.backgroundColor = clicked
      }else{
        this.style.backgroundColor ="hsl(98, 3%, 5%)";
        msg.textContent = "Try again"
      }
    });
}

function cc(color){

    for(var i = 0; i < squares.length; i++){

        squares[i].style.backgroundColor = color;
    }
}

function pc(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function grc(num){

  var arr = [];

  for(var i = 0; i< num; i++){

    arr.push(rc());
  }

  return arr;
}

function rc(){

  var r = Math.floor(Math.random() * 256);

  var g = Math.floor(Math.random() * 256);

  var b = Math.floor(Math.random() * 256); 
  return "rgb(" + r + ", " + g + ", " + b + ")";
}