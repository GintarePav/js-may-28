export const getCategories = async () => {
  try {
    const apiData = await fetch("https://api.chucknorris.io/jokes/categories");
    const categories = await apiData.json();
    const categorySelector = document.querySelector("#search-dropdown");
    categories.forEach((category) => {
      const categoryItem = document.createElement("option");
      categoryItem.textContent = category;
      categoryItem.classList.add("search-form__category-item");
      categoryItem.setAttribute("value", category);
      categorySelector.appendChild(categoryItem);
    });
  } catch (error) {
    console.error("Error getting categories:", error);
  }
};
