const musicButton = document.getElementById('musicButton');
const logo = document.getElementById('logo');
let isColInv = false;
const classicalMusic = document.getElementById('classicalMusic');
const randBg = [
'https://media.discordapp.net/attachments/1135095275673882656/1135095507551793152/753290225___a_768_576.jpg?width=691&height=518',
'https://media.discordapp.net/attachments/1135095275673882656/1135095507765706793/754237562___a_853_480.jpg?width=719&height=404',
'https://media.discordapp.net/attachments/1135095275673882656/1135095507975409836/754241471___a_720_540.jpg?width=647&height=485',
'https://media.discordapp.net/attachments/1135095275673882656/1135095508239659090/756099191___a_720_540.jpg?width=647&height=485',
'https://media.discordapp.net/attachments/1135095275673882656/1135095508487127150/766567361___a_720_576.jpg?width=647&height=518',
'https://media.discordapp.net/attachments/1135095275673882656/1135095508717801533/767416704___a_720_540.jpg?width=647&height=485',
'https://media.discordapp.net/attachments/1135095275673882656/1135095509095297187/826796600___a_1280_720.jpg?width=719&height=404',
'https://media.discordapp.net/attachments/1135095275673882656/1135095509330182215/846778135___a_1440_1080.jpg?width=719&height=539',
'https://media.discordapp.net/attachments/1135095275673882656/1135095509569245285/ezgif.com-webp-to-png.webp?width=719&height=480'
];

function playMusic() {
if (classicalMusic.paused) {
	classicalMusic.play();
} else {
	classicalMusic.pause();
}
}

function inverseColor() {
  const imgButton = musicButton.querySelector('.imgButton img');
  isColInv = !isColInv;

  if (isColInv) {
    imgButton.style.filter = 'invert(100%)';
  } else {
    imgButton.style.filter = 'none';
  }
}
logo.style.filter = 'invert(100%)'

musicButton.addEventListener('click', playMusic);
musicButton.addEventListener('click', inverseColor);

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
