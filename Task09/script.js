const wrapper = document.querySelector(".wrapper");
wrapper.style.display = "grid";
wrapper.style.gridTemplateColumns = "repeat(5, 50px)";
wrapper.style.gridTemplateRows = "repeat(5, 50px)";
wrapper.style.gridGap = "5px";
wrapper.style.justifyContent = "center";

function getColour() {
  let array = [];
  for (let i = 0; i < 3; i++) {
    array.push(Math.floor(Math.random() * 256));
  }
  let [a, b, c] = array;

  return `rgb(${a},${b},${c})`;
}

const myCube = document.querySelectorAll(".cube");

setInterval(function generateBlocksInterval() {
  return myCube.forEach((cube) => (cube.style.backgroundColor = getColour()));
}, 1000);