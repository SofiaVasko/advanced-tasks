const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const audio1 = document.querySelector(".audio1");
const audio2 = document.querySelector(".audio2");
const audio3 = document.querySelector(".audio3");
const audio4 = document.querySelector(".audio4");
const audio5 = document.querySelector(".audio5");

document.addEventListener("keydown", oneMusic);
document.addEventListener("keydown", twoMusic);
document.addEventListener("keydown", threeMusic);
document.addEventListener("keydown", fourMusic);
document.addEventListener("keydown", fiveMusic);

function oneMusic(event) {
  if (event.key === "A") {
    audio1.play();
    block1.style.boxShadow = "0 0 2rem #ffd700";
    block1.style.border = "2rem solid #ffd700";
  }
}

function twoMusic(event) {
  if (event.key === "B") {
    audio2.play();
    block2.style.boxShadow = "0 0 2rem #ffd700";
    block2.style.border = "2rem solid #ffd700";
  }
}

function threeMusic(event) {
  if (event.key === "C") {
    audio3.play();
    block3.style.boxShadow = "0 0 2rem #ffd700";
    block3.style.border = "2rem solid #ffd700";
  }
}

function fourMusic(event) {
  if (event.key === "D") {
    audio4.play();
    block4.style.boxShadow = "0 0 2rem #ffd700";
    block4.style.border = "2rem solid #ffd700";
  }
}

function fiveMusic(event) {
  if (event.key === "E") {
    audio5.play();
    block5.style.boxShadow = "0 0 2rem #ffd700";
    block5.style.border = "2rem solid #ffd700";
  }
}