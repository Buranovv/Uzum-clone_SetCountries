import { getElement } from "../JS/helpers.js";
import { BASE_API } from "./utils.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const title = getElement(".card__title");
const img = getElement("#card-img");
const create = getElement(".card-createAt");
const price = getElement(".card-price");
const elLogo = getElement(".logo");

fetch(BASE_API + "product/" + id)
  .then((res) => res.json())
  .then((res) => {
    title.textContent = res.title;
    price.textContent = res.price;
    img.src = res.image;
    create.textContent = res.createdAt;
  });
