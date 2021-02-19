function randomImg() {
    var random6 = 6 * Math.random();
    var randomNumber1 = Math.floor(random6) + 1;
    var ImgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    var randomImg = ImgArray[randomNumber1 - 1];
    return randomImg;
}
var img1 = randomImg();
var img2 = randomImg();
document.querySelector('.dice .img1').setAttribute('src',img1);
document.querySelector('.dice .img2').setAttribute('src',img2);

if ((img1.slice(7,12))> (img2.slice(7,12))) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins!";
} else if ((img1.slice(7,12))< (img2.slice(7,12))) {
    document.querySelector('h1').innerHTML = "Player 2 wins! 🚩";
} else {
    document.querySelector('h1').innerHTML = "Draw!";
}