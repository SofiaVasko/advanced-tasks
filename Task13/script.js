const button = document.querySelector(".btn");

function* createdGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const idGenerator = createdGenerator();

function createID() {
  let createdID = idGenerator.next().value;
  button.textContent = "Your identifier: " + createdID;
}

button.addEventListener("click", createID);