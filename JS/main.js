import { renderFn, getElement } from "./helpers.js";
import { BASE_API } from "./utils.js";

const elCards = getElement(".cards");
const elElec = getElement("#electronics");
const elJew = getElement("#jewelery");
const elCloth = getElement("#clothing");
const elForm = getElement("#form");
const elSearch = getElement("#search-input");
const toUpBtn = getElement("#to-up");
const toUpBtnBox = getElement(".to-up-box");
const uz = getElement("#uz");
const ru = getElement("#ru");

fetch(BASE_API + "product")
  .then((res) => res.json())
  .then((res) => {
    renderFn(res, elCards);
  });
// debugger;
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    toUpBtnBox.style.display = "block";
  } else {
    toUpBtnBox.style.bottom = "4%";
  }
});

export function toUp() {
  toUpBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}
toUp();
// elElec.addEventListener("click", () => {
//   const elec = [];

//   products.forEach((element) => {
//     if (element.category == "electronics") {
//       elec.push(element);
//     }
//   });
//   renderFn(elec, elCards);
// });

// elJew.addEventListener("click", () => {
//   const jew = [];

//   products.forEach((element) => {
//     if (element.category == "jewelery") {
//       jew.push(element);
//     }
//   });
//   renderFn(jew, elCards);
// });

// elCloth.addEventListener("click", () => {
//   const cloth = [];

//   products.forEach((element) => {
//     if (element.category == "clothing") {
//       cloth.push(element);
//     }
//   });
//   renderFn(cloth, elCards);
// });

// elCards.addEventListener("click", (evt) => {
//   fetch(BASE_API + "product")
//     .then((res) => res.json())
//     .then((res) => {
//       if (evt.target.id === "ui-icon-f" || evt.target.id === "ui-icon") {
//         const id = Number(evt.target.dataset.id);
//         res.forEach((element) => {
//           if (element.id === id) {
//             element.isFav = !element.isFav;
//           }
//         });
//       }
//       renderFn(res, elCards);
//     });
// });

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  fetch(BASE_API + "product")
    .then((res) => res.json())
    .then((res) => {
      let newArr = [];

      res.forEach((element) => {
        if (
          element.title.toLowerCase().includes(elSearch.value.toLowerCase())
        ) {
          newArr.push(element);
        }
      });
      renderFn(newArr, elCards);
      elForm.reset();
    })
    .catch((err) => {
      alert(err);
    });
});
