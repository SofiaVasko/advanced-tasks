const heroes = document.querySelector(".heroes_btn");
const planetsButton = document.querySelector(".planets_btn");
const nextButton = document.querySelector(".next_btn");
const planetsContainer = document.querySelector(".planets");

heroes.addEventListener("click", () => {
  getHeroes().then((results) => {
    const characterData = results.characterNames.map((name, index) => {
      const birthYear = results.characterbirthYears[index];
      const gender = results.charactermaleFemale[index];
      const characterElement = document.createElement("div");
      characterElement.classList.add("character");
      const nameElement = document.createElement("p");
      nameElement.textContent = `Name: ${name}`;
      const birthYearElement = document.createElement("p");
      birthYearElement.textContent = `Birth year: ${birthYear}`;
      const genderElement = document.createElement("p");
      const genderPng = document.createElement("img");
      if (gender === "male") {
        genderPng.src = "img/male.png";
      } else if (gender === "female") {
        genderPng.src = "img/female.png";
      } else {
        genderPng.src = "img/unknown.png";
      }
      genderElement.textContent = `Gender: ${gender}`;
      characterElement.appendChild(nameElement);
      characterElement.appendChild(birthYearElement);
      characterElement.appendChild(genderElement);
      characterElement.appendChild(genderPng);
      return characterElement;
    });

    const charactersContainer = document.createElement("div");
    charactersContainer.classList.add("characters-container");
    characterData.forEach((characterElement) => {
      charactersContainer.appendChild(characterElement);
    });
    document.body.appendChild(charactersContainer);
  });
});

function getHeroes() {
  return fetch("https://swapi.dev/api/films/2/")
    .then((response) => response.json())
    .then((data) => {
      const charactersURL = data.characters;
      const charactersData = charactersURL.map((url) => {
        return fetch(url).then((response) => response.json());
      });
      return Promise.all(charactersData).then((characters) => {
        const charactersName = characters.map((character) => character.name);
        const birthYears = characters.map((character) => character.birth_year);
        const maleOrFemale = characters.map((character) => character.gender);
        return {
          characterNames: charactersName,
          characterbirthYears: birthYears,
          charactermaleFemale: maleOrFemale,
        };
      });
    });
}

let showingFirstHalf = true;
let allPlanets = [];

function getPlanets() {
  const planetsUrl = "https://swapi.dev/api/planets/";

  function fetchPlanets(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        allPlanets.push(...data.results);

        if (data.next) {
          return fetchPlanets(data.next);
        } else {
          return allPlanets;
        }
      });
  }

  return fetchPlanets(planetsUrl);
}

function displayPlanets(planets) {
  const startIndex = showingFirstHalf ? 0 : allPlanets.length / 2;
  const endIndex = showingFirstHalf ? allPlanets.length / 2 : allPlanets.length;

  for (let i = startIndex; i < endIndex; i++) {
    const planet = allPlanets[i];
    const planetElement = document.createElement("div");
    planetElement.textContent = planet.name;
    planetsContainer.appendChild(planetElement);
  }
}

planetsButton.addEventListener("click", () => {
  showingFirstHalf = true;
  displayPlanets(allPlanets);
});

nextButton.addEventListener("click", () => {
  showingFirstHalf = false;
  displayPlanets(allPlanets);
});

getPlanets().then((planets) => {
  allPlanets = planets;
});
