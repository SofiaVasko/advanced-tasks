const title = document.querySelector("h1");
const input = document.querySelector(".addNewTask");
const button = document.getElementById("button");
const section = document.querySelector("#day");
const btn = document.querySelector(".addTaskWithButton");
const reset = document.querySelector(".reset");

function getFullDate() {
  const data = new Date();
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(data);
}

title.innerHTML = getFullDate();
title.style.fontWeight = "900";

let a = localStorage.getItem("inputContent");
if (a) {
  input.value = a;
}
input.addEventListener("input", () => {
  localStorage.setItem("inputContent", input.value);
});

function addNewTask() {
  if (input.value) {
    const generalDiv = document.createElement("div");
    generalDiv.classList.add("inputAdded");

    const taskDiv = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "taskadd");
    checkbox.setAttribute("id", `taskadd-${Date.now()}`);
    checkbox.classList.add("checkbox");

    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.innerHTML = input.value;

    const select = document.createElement("select");
    select.setAttribute("name", "actionsadd");
    select.setAttribute("id", `actionsadd-${Date.now()}`);

    const optionPoint = document.createElement("option");
    optionPoint.setAttribute("value", "...");
    optionPoint.setAttribute("selected", "");
    optionPoint.setAttribute("disabled", "");
    optionPoint.innerHTML = "...";

    const optionPin = document.createElement("option");
    optionPin.setAttribute("value", "Pin");
    optionPin.innerHTML = "📍Pin on the top";

    const optionDelete = document.createElement("option");
    optionDelete.setAttribute("value", "Delete");
    optionDelete.innerHTML = "✖ Delete";

    section.append(generalDiv);
    generalDiv.append(taskDiv, select);
    taskDiv.append(checkbox, label);
    select.append(optionPoint, optionPin, optionDelete);

    input.value = "";
    localStorage.removeItem("inputContent");
  }

  select();
  check();
  checkboxState();
}

reset.addEventListener("click", () => {
  let divs = document.querySelectorAll("div");
  localStorage.clear();
  divs.forEach((div) => {
    if (div.classList.contains("inputAdded")) {
      div.remove();
    }
  });
});

button.addEventListener("click", () => {
  addNewTask();
  updateLocalStorage();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewTask();
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  const everyTask = Array.from(document.querySelectorAll(".inputAdded")).map(
    (item) => {
      return item.outerHTML;
    }
  );
  localStorage.setItem("taskContent", JSON.stringify(everyTask));
}

let allTaskContent = JSON.parse(localStorage.getItem("taskContent"));

document.addEventListener("DOMContentLoaded", () => {
  if (allTaskContent) {
    allTaskContent.forEach((item) =>
      section.insertAdjacentHTML("beforeend", item)
    );
    select();
    check();
    checkboxState();
  }
});

function select() {
  document.querySelectorAll("select").forEach((select) =>
    select.addEventListener("change", (event) => {
      const optionChecked = event.target.value;
      let closest = select.closest("div");

      if (optionChecked === "Pin") {
        btn.insertAdjacentElement("afterend", closest);
        closest.classList.add("pinned");
        updateLocalStorage();
      }
      if (optionChecked === "Delete") {
        let childCheckBox = closest.childNodes;
        localStorage.removeItem(childCheckBox[0].firstChild.id);
        closest.remove();
        updateLocalStorage();
      }
    })
  );
}

function check() {
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) =>
    checkbox.addEventListener("change", () => {
      localStorage.setItem(checkbox.id, checkbox.checked);
    })
  );
}

function checkboxState() {
  document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
    let state = localStorage.getItem(checkbox.id);
    if (state === "true") {
      checkbox.checked = true;
    }
  });
}
