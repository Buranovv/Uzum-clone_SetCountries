import { renderFn, getElement } from "./helpers.js";
import { toUp } from "./main.js";
import { BASE_API } from "./utils.js";

const elCards = getElement(".cards");
// const elElec = getElement("#electronics");
// const elJew = getElement("#jewelery");
// const elCloth = getElement("#clothing");
const elForm = getElement("#form");
const elSearch = getElement("#search-input");
const addCard = getElement("#add-card");
const newTitle = getElement("#newTitle");
const newImg = getElement("#newImg");
const newPrice = getElement("#newPrice");
const newCategory = getElement("#newCategory");
const newCreatedAt = getElement("#newCreatedAt");

$(document).ready(function () {
  $("input:disabled").val(
    `${new Date().getUTCDate()}/${
      new Date().getUTCMonth() + 1
    }/${new Date().getUTCFullYear()}`
  );
});

const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("../index.html");
}

fetch(BASE_API + "product")
  .then((res) => res.json())
  .then((res) => {
    renderFn(res, elCards, true);
  });

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
//   fetch(BASE_API + "/product")
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
      const newArr = [];

      res.forEach((element) => {
        if (
          element.title.toLowerCase().includes(elSearch.value.toLowerCase())
        ) {
          newArr.push(element);
        }
        renderFn(newArr, elCards, true);
      });
      elForm.reset();
    })
    .catch((err) => {
      alert(err);
    });
});

addCard.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCard = {
    title: newTitle.value,
    image: newImg.value,
    price: newPrice.value,
    category: newCategory.value,
    createdAt: newCreatedAt.value,
  };

  fetch(BASE_API + "product", {
    method: "POST",
    body: newCard,
  })
    .then((res) => res.json())
    .then((res) => {
      fetch(BASE_API + "product")
        .then((res) => res.json())
        .then((res) => {
          renderFn(res, elCards, true);
        });
    });

  addCard.reset();
});

elCards.addEventListener("click", (evt) => {
  console.log(evt.target);
  if (evt.target.id === "delete-btn") {
    fetch(BASE_API + `product/${evt.target.dataset.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        fetch(BASE_API + "product")
          .then((res) => res.json())
          .then((res) => {
            renderFn(res, elCards, true);
          });
      });
  }

  if (evt.target.id === "edit-btn") {
    const editTit = getElement("#editTitle");
    const editImg = getElement("#editImg");
    const editPrice = getElement("#editPrice");
    const editCategory = getElement("#editCategory");
    const editCreatedAt = getElement("#editCreatedAt");
    const prevImg = getElement("#prev-img");
    const saveChan = getElement("#save-changes");

    fetch(BASE_API + `product/${evt.target.dataset.id}`, {
      method: "Put",
    })
      .then((resEdit) => resEdit.json())
      .then((resEdit) => {
        console.log(resEdit);
        editTit.value = resEdit.title;
        editImg.value = resEdit.image;
        editPrice.value = resEdit.price;
        editCategory.value = resEdit.category;
        editCreatedAt.value = resEdit.createdAt;
        prevImg.src = resEdit.image;

        saveChan.addEventListener("click", () => {
          resEdit.title = editTit.value;
          resEdit.image = editImg.value;
          resEdit.price = editPrice.value;
          resEdit.category = editCategory.value;
          resEdit.createdAt = editCreatedAt.value;

          fetch(BASE_API + "product")
            .then((res) => res.json())
            .then((res) => {
              renderFn(res, elCards, true);
            })
            .catch((err) => {
              alert(err);
            });
        });
      });
  }
});
