const musicButton = document.getElementById('musicButton');
const logo = document.getElementById('logo');
let isColInv = false;
const classicalMusic = document.getElementById('classicalMusic');
const randBg = [
'assets/bg/bgp1.jpg',
'assets/bg/bgp2.jpg',
'assets/bg/bgp3.jpg',
'assets/bg/bgp4.jpg',
'assets/bg/bgp5.jpg',
'assets/bg/bgp6.jpg',
'assets/bg/bgp7.jpg',
'assets/bg/bgp8.jpg',
'assets/bg/bgp9.jpg'
];
//playing the music
function playMusic() {
if (classicalMusic.paused) {
	classicalMusic.play();
} else {
	classicalMusic.pause();
}
}
// repeating the music
function restartMusic() {
  classicalMusic.currentTime = 0; // Reset the playback position to the beginning
  classicalMusic.play();
}
//button behavior
function inverseColor() {
  const imgButton = musicButton.querySelector('img');
  isColInv = !isColInv;

  if (isColInv) {
    imgButton.style.filter = 'invert(100%)';
  } else {
    imgButton.style.filter = 'none';
  }
}
logo.style.filter = 'invert(100%)'
//music event listeners
musicButton.addEventListener('click', playMusic);
musicButton.addEventListener('click', inverseColor);
classicalMusic.addEventListener('ended', restartMusic);

document.addEventListener('DOMContentLoaded', function() {
  const randomIndex = Math.floor(Math.random() * randBg.length);
  const randomImageUrl = randBg[randomIndex];
  const bgImg = document.getElementById('bgImg');
  bgImg.style.backgroundImage = `url(${randomImageUrl})`;
});

document.addEventListener('mousemove', function (event) {
  const bgImg = document.getElementById('bgImg');
  const sensitivity = 0.02; // Adjust this value for the desired effect

  // Calculate the new background position based on mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  // Update background position
  bgImg.style.backgroundPositionX = `${-deltaX * sensitivity}px`;
  bgImg.style.backgroundPositionY = `${-deltaY * sensitivity}px`;
});
