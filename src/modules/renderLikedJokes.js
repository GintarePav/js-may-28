export let likedJokes = JSON.parse(localStorage.getItem("likedJokes")) || [];

export const renderLikedJokes = () => {
    const savedJokesSection = document.querySelector(".joke-list");
    const storedJokes = localStorage.getItem("likedJokes");
    if (storedJokes) {
      const likedJokes = JSON.parse(storedJokes);
      const sectionHeader = document.createElement("h4");
      sectionHeader.textContent = "Saved Jokes";
      sectionHeader.classList.add("w-100", "text-center");
      savedJokesSection.appendChild(sectionHeader);
      for (let joke of likedJokes) {
        const card = document.createElement("div");
        card.classList.add("joke-list__card", "card", "m-3");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardText = document.createElement("p");
        cardText.textContent = joke;
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        savedJokesSection.appendChild(card);
      }
    } else {
        const message = document.createElement("p");
        message.textContent = "No jokes to display."
        message.classList.add("m-3", "text-center");
        savedJokesSection.appendChild(message);
    }
}