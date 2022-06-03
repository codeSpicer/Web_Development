var random1 = Math.floor(Math.random() * 6 + 1);
var random2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource1 = "images/dice" + random1 + ".png";
var randomImageSource2 = "images/dice" + random2 + ".png";

// var image1 = document.getElementsByClassName("img1");
var image1 = document.querySelectorAll("img")[0];
var image2 = document.getElementsByClassName("img2")[0];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

var victory_msg = document.getElementsByTagName("h1")[0];

if (random1 > random2) {
    document.querySelector("h1").innerText = "Player 1 wins!";
} else if (random2 > random1) {
    victory_msg.innerText = "Player 2 wins!";
} else {
    victory_msg.innerHTML = "Draw!";
}
