import { likedJokes } from "./renderLikedJokes";

export const createCard = async (result) => {
  try {
    const resultSection = document.querySelector(".search-results");
    const joke = await result;
    const jokeText = result.value;
    const card = document.createElement("div");
    card.classList.add("card", "search-results__card", "m-5");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = jokeText;
    cardBody.appendChild(text);
    card.appendChild(cardBody);

    const likeButton = document.createElement("a");
    likeButton.textContent = "Like";
    likeButton.setAttribute("href", "");
    likeButton.setAttribute("id", "save-button");
    likeButton.classList.add("btn", "btn-dark", "m-3");
    card.appendChild(likeButton);

    resultSection.appendChild(card);

    likeButton.addEventListener("click", (e) => {
        e.preventDefault();
        likedJokes.push(jokeText);
        localStorage.setItem("likedJokes", JSON.stringify(likedJokes));
      });

  } catch (error) {
    console.error("Error creating the card:", error);
  }
};
