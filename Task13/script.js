function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const idGenerator = createIdGenerator();

const id = document.querySelector(".getID");
id.addEventListener("click", () => {
  id.innerHTML = `Your ID: ${idGenerator.next().value}`;
});

function* newFontGenerator(i) {
  let upDown;
  while (true) {
    upDown = yield i;
    if (upDown === "up") {
      i += 2;
    } else if (upDown === "down") {
      i -= 2;
    }
  }
}
const fontGenerator = newFontGenerator(16);

const upF = document.querySelector(".up");
const downF = document.querySelector(".down");
const body = document.querySelector("body");

upF.addEventListener("click", () => {
  fontGenerator.next().value;
  body.style.fontSize = `${fontGenerator.next("up").value}px`;
});

downF.addEventListener("click", () => {
  fontGenerator.next().value;
  body.style.fontSize = `${fontGenerator.next("down").value}px`;
});
