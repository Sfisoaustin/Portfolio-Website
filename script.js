const texts = [
  "Junior Software Engineer",
  "Application Developer",
];

let textIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect() {

  if(charIndex < texts[textIndex].length){

      typingText.textContent += texts[textIndex].charAt(charIndex);

      charIndex++;

      setTimeout(typeEffect,100);

  } else {

      setTimeout(eraseEffect,1500);

  }
}

function eraseEffect(){

  if(charIndex > 0){

      typingText.textContent =
      texts[textIndex].substring(0,charIndex-1);

      charIndex--;

      setTimeout(eraseEffect,50);

  } else {

      textIndex++;

      if(textIndex >= texts.length){
          textIndex = 0;
      }

      setTimeout(typeEffect,300);
  }
}

typeEffect();

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();
}

setInterval(updateClock,1000);

updateClock();