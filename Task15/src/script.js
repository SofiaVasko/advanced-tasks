import { getRandomChinese } from "./prevTask/firstFunction.js";
import {
  idGenerator,
  fontGenerator,
  id,
  upF,
  downF,
  body,
} from "./prevTask/secondFunction.js";
import "./style.css";

getRandomChinese(10).then((response) =>
  console.log(`Your random chinese symbols: ${response}`)
);

id.addEventListener("click", () => {
  id.innerHTML = `Your ID: ${idGenerator.next().value}`;
});

upF.addEventListener("click", () => {
  fontGenerator.next().value;
  body.style.fontSize = `${fontGenerator.next("up").value}px`;
});

downF.addEventListener("click", () => {
  fontGenerator.next().value;
  body.style.fontSize = `${fontGenerator.next("down").value}px`;
});
