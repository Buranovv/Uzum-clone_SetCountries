const elCards = getElement(".cards");
const elForm = getElement("#form");
const elSearch = getElement(".search");
const elFilterList = getElement(".filter__list");
const elTotal = getElement(".total");
const elLoader = getElement(".spinner-js");

let countries;
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    renderFn(res, elCards);
    elLoader.style.display = "none";
  });

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch(`https://restcountries.com/v3.1/name/${elSearch.value}`)
    .then((res) => res.json())
    .then((res) => {
      renderFn(res, elCards);
    });
});

elFilterList.addEventListener("change", (evt) => {
  if (evt.target.value == "all") {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        renderFn(res, elCards);
        elLoader.style.display = "none";
      });
  } else {
    fetch(`https://restcountries.com/v3.1/region/${evt.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        renderFn(res, elCards);
      });
  }
});
