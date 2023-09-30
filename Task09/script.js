const wrapper = document.querySelector(".wrapper");
const blocks = document.querySelectorAll(".wrapper .block");

wrapper.style.display = "grid";
wrapper.style.gridTemplateColumns = "repeat(5, 50px)";
wrapper.style.gridTemplateRows = "repeat(5, 50px)";
wrapper.style.justifyContent = "center";

function generateBlocks(blocks) {
  const color = "0123456789ABCDEF";
  blocks.forEach((element) => {
    let backgroundColor = "#";
    for (let i = 0; i < 6; i++) {
      backgroundColor += color[Math.floor(Math.random() * 16)];
    }
    element.style.backgroundColor = backgroundColor;
  });
}

generateBlocks(blocks);