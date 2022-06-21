const getBtn = document.getElementById("getBtn");
const container = document.querySelector("#Pokelist");

let background = {
  normal: "#75515b",
  fighting: "#9a4025",
  flying: "#4b677d",
  poison: "#5e2d88",
  ground: "#a9702c",
  rock: "#48180a",
  bug: "#194d25",
  ghost: "#32336b",
  steel: "#60756e",
  fire: "#ab1e22",
  water: "#1552e1",
  grass: "#147b3c",
  electric: "#e3e32b",
  psychic: "#a52a6c",
  ice: "#86d2f5",
  dragon: "#458b95",
  dark: "#040706",
  fairy: "#981944",
  unknown: "#b2b2b2",
  shadow: "#a5a5a5",
};

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
  number.innerHTML = `#0${json.id} <br><br>`;
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

  const element = json.types[0].type.name;

  const keys = Object.keys(background);

  if (keys.includes(element)) {
    div.style.backgroundColor = background[element];
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
    await pokemonDetails([i + 1]);
  }
}
