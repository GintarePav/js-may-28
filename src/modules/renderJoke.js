import { createCard } from "./createCard";

const getJoke = async (link) => {
  try {
    const query = await fetch(link);
    const queryResult = await query.json();
    return queryResult;
  } catch (error) {
    console.error("Error getting jokes:", error);
  }
};

export const renderJoke = async () => {
  try {
    const dropdownValue = document.querySelector("#search-dropdown").value;
    const keywordValue = document
      .querySelector("#search-input")
      .value.replace(" ", "+");
    if (dropdownValue !== "" && keywordValue === "") {
      const queryLink = `https://api.chucknorris.io/jokes/random?category=${dropdownValue}`;
      const joke = await getJoke(queryLink);
      createCard(joke);
    } else if (dropdownValue === "" && keywordValue !== "") {
      const queryLink = `https://api.chucknorris.io/jokes/search?query=${keywordValue}`;
      const jokesReceived = await getJoke(queryLink);
      const jokeArray = jokesReceived.result;
      const randomIndex = Math.floor(Math.random() * jokeArray.length);
      const joke = jokeArray[randomIndex];
      createCard(joke);
    } else {
      const message = document.createElement("p");
      message.textContent = "Please choose a category or type a word.";
      message.classList.add("m-3", "text-center");
      document.querySelector(".search-form form").appendChild(message);
      window.setTimeout(() => {
        document.querySelector(".search-form form").removeChild(message);
      }, "3000");
    }
  } catch (error) {
    console.error("Error rendering the card:", error);
  }
};
