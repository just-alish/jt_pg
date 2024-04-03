const musicButton = document.getElementById('musicButton');
const logo = document.getElementById('logo');
let isColInv = false;
const classicalMusic = document.getElementById('classicalMusic');
const randBg = [
'https://media.discordapp.net/attachments/1135095275673882656/1135095507551793152/753290225___a_768_576.jpg?ex=661b7692&is=66090192&hm=dc0b5a20e4f17aca8e3411e30daf16979e420f181721402cdcc4a52b9c8b4e4f&=&format=webp&width=720&height=540',
'https://media.discordapp.net/attachments/1135095275673882656/1135095507765706793/754237562___a_853_480.jpg?ex=661b7692&is=66090192&hm=4edda99eb1b0c0393bc64eb594cf94981d20c685cd5eb3932c143c9b7a7374fe&=&format=webp&width=693&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095507975409836/754241471___a_720_540.jpg?ex=661b7692&is=66090192&hm=ee239532ce3834db64310b041535f721e76e7801bd10e795f4b58cd183a3884a&=&format=webp&width=520&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095508239659090/756099191___a_720_540.jpg?ex=661b7692&is=66090192&hm=6d3e8fe510c93608105ccbe9508c2a2021185624acc2ef94f2ef1ad90a961858&=&format=webp&width=520&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095508487127150/766567361___a_720_576.jpg?ex=661b7692&is=66090192&hm=0930534928ff24bd6e818ce251a9a17f1b08b96d094d623d8104f34817c883b5&=&format=webp&width=488&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095508717801533/767416704___a_720_540.jpg?ex=661b7692&is=66090192&hm=5693640de7699a3e4cddef5c991cfe391738e148d411534fdb2fdf046eb4284a&=&format=webp&width=520&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095509095297187/826796600___a_1280_720.jpg?ex=661b7692&is=66090192&hm=037e927a01faec497912d993188260c419eea5056acf92ec21d36c9c2df52ef2&=&format=webp&width=693&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095509330182215/846778135___a_1440_1080.jpg?ex=661b7692&is=66090192&hm=d0e029472b15addf60364af5a6cd8f2ce9bf0c20fbd75fe57295456aa8219d46&=&format=webp&width=520&height=390',
'https://media.discordapp.net/attachments/1135095275673882656/1135095509569245285/ezgif.com-webp-to-png.webp?ex=661b7692&is=66090192&hm=b36f991c682e16640a10d86851be3c66e4afefebc257286bc4d89e381ac9b351&=&format=webp&width=584&height=390'
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
