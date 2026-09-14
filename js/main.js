// js/main.js — orchestration
import { searchByTitle, filterByCategory, sortProducts } from "./algorithms.js";
import { fetchProducts } from "./api.js";
import { renderProducts } from "./ui.js";
import { state } from "./state.js";

state.products = fetchProducts();

function render() {
  let result = state.products;

  if (state.search.trim() !== "") {
    result = searchByTitle(result, state.search);
  }

  result = filterByCategory(result, state.category);
  result = sortProducts(result, state.sortBy);

  state.status = result.length === 0 ? "empty" : "success";
  renderProducts(result);
}

render();

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});
