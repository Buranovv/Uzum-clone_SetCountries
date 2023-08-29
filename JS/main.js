const elCards = getElement(".cards");
const elForm = getElement("#form");
const elSearch = getElement(".search");
const elFilterOpen = getElement(".filter__title");
const elFilterClose = getElement(".filter__close");
const elFilterList = getElement(".filter__list");
const elTotal = getElement(".total");
const all = getElement(".all");
const africa = getElement(".afrika");
const america = getElement(".america");
const asia = getElement(".asia");
const europe = getElement(".europe");
const ocean = getElement(".ocean");

let countries;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderFn(res, elCards);
    countries = res;
  });

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newArr = [];

  countries.forEach((element) => {
    if (
      element.name.official.toLowerCase().includes(elSearch.value.toLowerCase())
    ) {
      newArr.push(element);
    }
  });
  elForm.reset();
  renderFn(newArr, elCards);
});

elFilterOpen.addEventListener("click", () => {
  elFilterList.className += " show";
  elFilterClose.className += " show";
  elFilterOpen.className += " close";
});

elFilterClose.addEventListener("click", () => {
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
});

all.addEventListener("click", () => {
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
  renderFn(countries, elCards);
});

africa.addEventListener("click", () => {
  const africa = [];

  countries.forEach((element) => {
    if (element.continents == "Africa") {
      africa.push(element);
    }
  });
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
  renderFn(africa, elCards);
});

america.addEventListener("click", () => {
  const america = [];

  countries.forEach((element) => {
    if (
      element.continents == "North America" ||
      element.continents == "South America"
    ) {
      america.push(element);
    }
  });
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
  renderFn(america, elCards);
});

europe.addEventListener("click", () => {
  const europe = [];

  countries.forEach((element) => {
    if (element.continents == "Europe") {
      europe.push(element);
    }
  });
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
  renderFn(europe, elCards);
});

ocean.addEventListener("click", () => {
  const ocean = [];

  countries.forEach((element) => {
    if (element.continents == "Oceania") {
      ocean.push(element);
    }
  });
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
  renderFn(ocean, elCards);
});

asia.addEventListener("click", () => {
  const asia = [];

  countries.forEach((element) => {
    if (element.continents == "Asia") {
      asia.push(element);
    }
  });
  elFilterOpen.className = "filter__title";
  elFilterList.className = "filter__list";
  elFilterClose.className = "filter__close";
  renderFn(asia, elCards);
});

const modeDark = getElement("#where-dark");
const modeLight = getElement("#where-light");

modeDark.addEventListener("click", () => {
  modeLight.className += " show";
  modeDark.className += " close";
});
