export const limitSearch = () => {
  const dropdown = document.querySelector("#search-dropdown");
  const inputField = document.querySelector("#search-input");

  dropdown.addEventListener("change", () => {
    if (dropdown.value !== "") {
      inputField.disabled = true;
    } else {
      inputField.disabled = false;
    }
  });

  inputField.addEventListener("input", () => {
    if (inputField.value !== "") {
      dropdown.disabled = true;
    } else {
      dropdown.disabled = false;
    }
  });
};
