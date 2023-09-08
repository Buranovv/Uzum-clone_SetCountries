import { getElement } from "./helpers.js";

const logoutDiv = getElement("#logout-div");
const submit = getElement("#submit");
const password = getElement("#password");
const email = getElement("#email");
const linkDiv = getElement("#link-div");
const modal = getElement("#exampleModal");
const loginDiv = getElement("#login-div");

let isLogin = localStorage.getItem("token") ? true : false;
// localStorage.setItem("token", true);

if (isLogin) {
  loginDiv.style.display = "none";
  logoutDiv.style.display = "flex";
  const newLink = document.createElement("a");
  newLink.href = "../html/admin.html";
  newLink.target = "_blank";
  newLink.className = "linkAdmin";
  newLink.textContent = "Admin sahifasi";
  linkDiv.appendChild(newLink);
}

logoutDiv.addEventListener("click", () => {
  localStorage.clear();

  linkDiv.innerHtml = "";
  logoutDiv.style.display = "none";
  loginDiv.style.display = "flex";

  window.location.reload();
});

submit.addEventListener("click", () => {
  const log = {
    email: email.value,
    password: password.value,
  };

  console.log(log);

  const authPost = async () => {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (data.token) {
      localStorage.setItem("token", data.token);

      logoutDiv.style.display = "flex";
      loginDiv.style.display = "none";
      const newLink = document.createElement("a");
      newLink.href = "../html/admin.html";
      newLink.className = "linkAdmin";
      newLink.textContent = "Admin sahifasi";
      linkDiv.appendChild(newLink);
    }
  };

  authPost();
});
