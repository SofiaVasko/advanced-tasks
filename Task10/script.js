let allKeys = {
  u: document.getElementById("sound1"),
  k: document.getElementById("sound2"),
  r: document.getElementById("sound3"),
  a: document.getElementById("sound4"),
  i: document.getElementById("sound5"),
  n: document.getElementById("sound6"),
  e: document.getElementById("sound7"),
};

document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  if (allKeys[key]) {
    allKeys[key].play();
    const cube = document.querySelectorAll(".cube");
    cube.forEach(function (item) {
      if (item.textContent.toLowerCase() === key) {
        item.style.transform = "scale(1.1)";
        item.style.color = "rgb(173, 118, 66)";
      }
    });
  }
});
