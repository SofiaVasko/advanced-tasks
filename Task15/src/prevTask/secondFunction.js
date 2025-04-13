export function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

export const idGenerator = createIdGenerator();

export const id = document.querySelector(".getID");

export function* newFontGenerator(i) {
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

export const fontGenerator = newFontGenerator(16);

export const upF = document.querySelector(".up");
export const downF = document.querySelector(".down");
export const body = document.querySelector("body");
