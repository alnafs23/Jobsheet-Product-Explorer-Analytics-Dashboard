// js/algorithms.js — searching, sorting, grouping, dan sejenisnya
// Bagian 6 — Linear Search (manual, tanpa .indexOf()/.find())
export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// Bagian 7 — Binary Search
export function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Bagian 9 — Grouping berdasarkan category
export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

// Fungsi berikut adalah logika search/filter/sort Product Explorer
export function searchByTitle(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter((p) => p.title.toLowerCase().includes(lower));
}

export function filterByCategory(products, category) {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function sortProducts(products, sortBy) {
  switch (sortBy) {
    case "price-asc":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...products].sort((a, b) => b.price - a.price);
    case "rating":
      return [...products].sort((a, b) => b.rating - a.rating);
    case "title":
      return [...products].sort((a, b) => a.title.localeCompare(b.title));
    default:
      return products;
  }
}
