const inputWithNumber = document.querySelector("#films");
const btn1 = document.querySelector(".btn_get_inf");
const items = document.querySelectorAll(".item");
const otherFilms = document.querySelector(".otherFilms");
const otherWrapper = document.querySelector(".otherWrapper");
const wrapperPlanets = document.querySelector(".wrapperPlanets");
const btn2 = document.querySelector("#btn_get_planets");
const btn3 = document.querySelector("#btn_get_next_planets");

let num = 2;

inputWithNumber.addEventListener("change", () => {
  num = +inputWithNumber.value;
  if (!Number.isInteger(num) || num <= 0 || num > 6) {
    alert(
      "Number should be 1, 2, 3, 4, 5 or 6. It's also should be an integer number. You typed an incorrect number."
    );
  } else {
    getCharacters(num);
  }
});

async function getCharacters(num) {
  let characters = await fetch(`https://swapi.dev/api/films/${num}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.characters;
    })
    .catch((err) => console.log(err.message));
  return characters;
}

async function getInfoAboutCharacters() {
  let characters = await getCharacters(num)
    .then((response) => {
      return response;
    })
    .catch((err) => console.warn(err.message));
  let infoAboutCharacters = characters.map((item) => {
    return fetch(item)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return {
          name: response.name,
          birthday: response.birth_year,
          gender: response.gender,
        };
      })
      .catch((err) => console.log(err.message));
  });
  return Promise.all(infoAboutCharacters);
}

let photos = {
  "Luke Skywalker":
    "url(https://static.wikia.nocookie.net/starwars/images/1/17/LukeSkywalker-Insider217.png/revision/latest?cb=20240130192944)",
  "C-3PO":
    "url(https://static.wikia.nocookie.net/starwars/images/a/a2/C-3PO-TROSTGG.png/revision/latest?cb=20230706042830)",
  "R2-D2":
    "url(https://upload.wikimedia.org/wikipedia/uk/thumb/3/39/R2-D2_Star_Wars.jpg/800px-R2-D2_Star_Wars.jpg)",
  "Darth Vader":
    "url(https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720)",
  "Leia Organa":
    "url(https://static.wikia.nocookie.net/p__/images/c/c9/Princess_Leia_Organa.png/revision/latest?cb=20200413162105&path-prefix=protagonist)",
  "Obi-Wan Kenobi":
    "url(https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721)",
  Chewbacca:
    "url(https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=0%2C48%2C1536%2C768)",
  "Han Solo":
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_x13h38rZrnGD7eYk5FL_8GfuecyMzMc94g&s)",
  "Wedge Antilles":
    "url(https://static.wikia.nocookie.net/starwars/images/6/62/WedgeMissionAccomplished.jpg/revision/latest?cb=20111008211148)",
  Yoda: "url(https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/01/yoda-with-lightsaber.jpg)",
  Palpatine:
    "url(https://cdn11.bigcommerce.com/s-2zs1uo/images/stencil/original/products/7774/20468/PALPATINE_MS_1__21909.1712936905.jpg?c=2)",
  "Boba Fet":
    "url(https://cdn11.bigcommerce.com/s-2zs1uo/images/stencil/original/products/1229/11126/BoF_BobaFett_Bust_01__85037.1673982084.jpg?c=2)",
  "IG-88": "url(https://i.ytimg.com/vi/2KfEfUfgUZ8/maxresdefault.jpg)",
  Bossk:
    "url(https://media.contentapi.ea.com/content/dam/swgoh/news-articles/bossk-1.jpg.adapt.crop16x9.575p.jpg)",
  "Lando Calrissian":
    "url(https://www.sideshow.com/storage/product-images/907059/lando-calrissian_star-wars_feature.jpg)",
  Lobot:
    "url(https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/lobot-true-purpose-star-wars-image.jpg)",
};

btn1.addEventListener("click", () => {
  items.forEach((item) => {
    item.style.display = "";
    item.style.backgroundImage = "";
    item.innerHTML = "";
  });
  getInfoAboutCharacters().then((response) =>
    items.forEach((item, index) => {
      item.style.display = "block";
      item.style.backgroundImage = Object.values(photos)[index];
      item.innerHTML = `${Object.keys(response[index])[0]}: ${
        Object.values(response[index])[0]
      }
    <br> ${Object.keys(response[index])[1]}: ${
        Object.values(response[index])[1]
      } 
    <br> ${Object.keys(response[index])[2]}: ${
        Object.values(response[index])[2]
      }`;
      if (Object.values(response[index])[2] === "male") {
        item.innerHTML += `<br> <img src="img/iconmonstr-gender-9-24.png" alt="male icon">`;
      } else if (Object.values(response[index])[2] === "female") {
        item.innerHTML += `<br> <img src="img/iconmonstr-gender-10-24.png" alt="female icon">`;
      } else {
        item.innerHTML += `<br> <img src="img/iconmonstr-gender-3-24.png" alt="noone icon">`;
      }
    })
  );
});

otherFilms.addEventListener("click", () => {
  otherWrapper.innerHTML = "";
  getInfoAboutCharacters().then((response) =>
    response.map((item, index) => {
      return (otherWrapper.innerHTML += `<p>${
        Object.keys(response[index])[0]
      }: ${Object.values(response[index])[0]}
     <br> ${Object.keys(response[index])[1]}: ${
        Object.values(response[index])[1]
      } 
     <br> ${Object.keys(response[index])[2]}: ${
        Object.values(response[index])[2]
      }     
     </p>`);
    })
  );
});

async function getPlanets() {
  let array = [];
  for (let i = 1; i < 7; i++) {
    await fetch(`https://swapi.dev/api/planets/?page=${i}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.results.forEach((item) => {
          array.push(item.name);
        });
      })
      .catch((err) => console.log(err.message));
  }
  return array;
}

btn2.addEventListener("click", () => {
  wrapperPlanets.innerHTML = "";

  getPlanets().then((response) => {
    let array = [
      response.slice(0, 10),
      response.slice(10, 20),
      response.slice(20, 30),
      response.slice(30, 40),
      response.slice(40, 50),
      response.slice(50, 60),
    ];

    array[0].forEach((item, index) => {
      wrapperPlanets.innerHTML += `<h2>${array[0][index]}</h2>`;
    });

    let count = 0;
    btn3.addEventListener("click", () => {
      count++;
      if (count > 0 && count < 6) {
        wrapperPlanets.innerHTML = "";
        array[count].map((item, index) => {
          wrapperPlanets.innerHTML += `<h2>${array[count][index]}</h2>`;
        });
      } else if (count === 6) {
        wrapperPlanets.innerHTML = "";
      }
    });
  });
});
