const getBtn = document.getElementById("getBtn");
const container = document.querySelector("#Pokelist");

getBtn.addEventListener("click", function () {
  displayPokemon();
});

async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
    method: "GET",
  });

  const json = await response.json();
  return json;
}

async function pokemonDetails(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const json = await response.json();

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.setAttribute("id", "output");
  div.style.display = "Inline-block";

  const number = document.createElement("span");
  number.classList.add("number");
  number.innerHTML = `${json.id} : `;
  number.setAttribute("id", "number");

  const name = document.createElement("span");
  name.classList.add("name");
  name.innerHTML = json.name;
  name.setAttribute("id", "name");

  const divImg = document.createElement("div");
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = json.sprites.front_shiny;
  img.setAttribute("id", "img");

  const type = document.createElement("span");

  if (json.types[0].type.name === "normal") {
    div.style.background = "#75515b";
  } else if (json.types[0].type.name === "fighting") {
    div.style.background = "#9a4025";
  } else if (json.types[0].type.name === "flying") {
    div.style.background = "#4b677d";
  } else if (json.types[0].type.name === "poison") {
    div.style.background = "#5e2d88";
  } else if (json.types[0].type.name === "ground") {
    div.style.background = "#a9702c";
  } else if (json.types[0].type.name === "rock") {
    div.style.background = "#48180a";
  } else if (json.types[0].type.name === "bug") {
    div.style.background = "#194d25";
  } else if (json.types[0].type.name === "ghost") {
    div.style.background = "#32336b";
  } else if (json.types[0].type.name === "steel") {
    div.style.background = "#60756e";
  } else if (json.types[0].type.name === "fire") {
    div.style.background = "#ab1e22";
  } else if (json.types[0].type.name === "water") {
    div.style.background = "#1552e1";
  } else if (json.types[0].type.name === "grass") {
    div.style.background = "#147b3c";
  } else if (json.types[0].type.name === "electric") {
    div.style.background = "#e3e32b";
  } else if (json.types[0].type.name === "psychic") {
    div.style.background = "#a52a6c";
  } else if (json.types[0].type.name === "ice") {
    div.style.background = "#86d2f5";
  } else if (json.types[0].type.name === "dragon") {
    div.style.background = "#458b95";
  } else if (json.types[0].type.name === "dark") {
    div.style.background = "#040706";
  } else if (json.types[0].type.name === "fairy") {
    div.style.background = "#981944";
  } else if (json.types[0].type.name === "unknown") {
    div.style.background = "#b2b2b2";
  } else if (json.types[0].type.name === "shadow") {
    div.style.background = "#a5a5a5";
  }

  type.classList.add("type");
  type.innerHTML = `Type : ${json.types[0].type.name}`;
  type.setAttribute("id", "type");

  div.appendChild(number);
  div.appendChild(name);
  divImg.appendChild(img);
  div.appendChild(divImg);
  div.appendChild(type);
  container.appendChild(div);
}

async function displayPokemon() {
  const data = await fetchData();
  for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name);
    pokemonDetails([i + 1]);
  }
}
