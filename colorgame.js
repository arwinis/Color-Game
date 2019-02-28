var numberOfSquare = 6;
var colors = generateRandomColors(numberOfSquare);
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var pickColor = pick();
var colordisplay = document.querySelector("#colordisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easybutton = document.querySelector("#easy");
var hardbutton = document.querySelector("#hard");

easybutton.addEventListener("click",function(){
    easybutton.classList.add("selected");
    hardbutton.classList.remove("selected");
    numberOfSquare = 3;
    colors = generateRandomColors(numberOfSquare);
    pickColor = pick();
    colordisplay.textContent = pickColor;
    for(var i = 0; i < square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }else{
            square[i].style.display = "none";
        }
    }
});

hardbutton.addEventListener("click",function(){
    easybutton.classList.remove("selected");
    hardbutton.classList.add("selected");
    numberOfSquare = 6;
    colors = generateRandomColors(numberOfSquare);
    pickColor = pick();
    colordisplay.textContent = pickColor;
    for(var i = 0; i < square.length; i++){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
    }
});

reset.addEventListener("click",function(){
    colors = generateRandomColors(numberOfSquare);
    pickColor = pick();
    colordisplay.textContent = pickColor;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    
    for(var i = 0; i < square.length;i++){
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

colordisplay.textContent = pickColor;

for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function(){
        var ClickedColor = this.style.backgroundColor;

        if(ClickedColor === pickColor){
            messageDisplay.textContent = "Correct!";
            changeColor(ClickedColor);
            h1.style.backgroundColor = ClickedColor;
            reset.textContent = "Play Again"
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again!";
        }
    });
}

function changeColor(color){
    for(var i = 0; i < colors.length; i++){
        square[i].style.backgroundColor = color;
    }
}
function pick(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(randomColor())

    }

    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return  "rgb(" + r + ", " + g + ", " + b + ")";
}