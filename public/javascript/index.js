import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler("http://localhost:8000/characters");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((apiResponse) => {
          let str = "";
          const data = apiResponse.data;
          data.forEach((character) => {
            //*! no need for storing character.data.key inside a variable
            str += `
            <div class="character-info">
               <div class="name">${character.name}</div>
               <div class="occupation">${character.occupation}</div>
               <div class="cartoon">${character.cartoon}</div>
               <div class="weapon">${character.weapon}</div>
            </div>
            `;
          });
          document.querySelector(".characters-container").innerHTML = str;
        })
        .catch((apiError) => console.log(apiError));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
