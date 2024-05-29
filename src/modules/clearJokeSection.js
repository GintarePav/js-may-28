const clearJokeSection = (className) => {
    const section = document.querySelector(className);
    section.innerHTML = "";
}

export default clearJokeSection;