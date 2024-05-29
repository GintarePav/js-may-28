import { getCategories } from "./modules/getCategories";
import { limitSearch } from "./modules/limitSearch";
import { renderJoke } from "./modules/renderJoke";
import clearJokeSection from "./modules/clearJokeSection";
import { renderLikedJokes } from "./modules/renderLikedJokes";

getCategories();
limitSearch();

document.getElementById("search-button").addEventListener("click", (e) => {
    e.preventDefault();
    clearJokeSection(".search-results");
    renderJoke();
    document.getElementById("search-dropdown").value = "";
    document.getElementById("search-input").value = "";
})

document.getElementById("liked-jokes-button").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".search-form").style.display = "none";
    clearJokeSection(".search-results");
    clearJokeSection(".joke-list");
    renderLikedJokes();
})