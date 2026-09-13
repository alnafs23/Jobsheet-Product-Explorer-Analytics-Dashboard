const { products } = require("./dataNested.js");

// Bagian 1 — JavaScript Fundamentals
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 },
];

function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    const finalPrice = calculateDiscountedPrice(
      item.price,
      item.discountPercent,
    );
    result.push({ ...item, finalPrice });
  }
  return result;
}

// Bagian 2 — Data Representation dan Array of Objects
const productsBagian2 = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Gaming Laptop", price: 1800, category: "laptops", stock: 2 },
  {
    id: 5,
    title: "Budget Smartphone",
    price: 250,
    category: "phones",
    stock: 20,
  },
  { id: 6, title: "Wireless Earbuds", price: 120, category: "audio", stock: 8 },
  { id: 7, title: "Ultrabook", price: 1500, category: "laptops", stock: 6 },
  {
    id: 8,
    title: "Flagship Smartphone",
    price: 999,
    category: "phones",
    stock: 4,
  },
  {
    id: 9,
    title: "Bluetooth Speaker",
    price: 60,
    category: "audio",
    stock: 25,
  },
  {
    id: 10,
    title: "2-in-1 Laptop",
    price: 1100,
    category: "laptops",
    stock: 9,
  },
  {
    id: 11,
    title: "Mid-range Smartphone",
    price: 450,
    category: "phones",
    stock: 12,
  },
  {
    id: 12,
    title: "Noise Cancelling Headphones",
    price: 300,
    category: "audio",
    stock: 1,
  },
  { id: 13, title: "Chromebook", price: 350, category: "laptops", stock: 18 },
  {
    id: 14,
    title: "Foldable Smartphone",
    price: 1600,
    category: "phones",
    stock: 2,
  },
  {
    id: 15,
    title: "Studio Monitor Speaker",
    price: 220,
    category: "audio",
    stock: 7,
  },
  {
    id: 16,
    title: "Business Laptop",
    price: 1350,
    category: "laptops",
    stock: 5,
  },
  {
    id: 17,
    title: "Rugged Smartphone",
    price: 500,
    category: "phones",
    stock: 10,
  },
  { id: 18, title: "Gaming Headset", price: 150, category: "audio", stock: 14 },
  {
    id: 19,
    title: "Workstation Laptop",
    price: 2200,
    category: "laptops",
    stock: 3,
  },
  {
    id: 20,
    title: "Entry Smartphone",
    price: 180,
    category: "phones",
    stock: 30,
  },
  { id: 21, title: "Soundbar", price: 400, category: "audio", stock: 6 },
  {
    id: 22,
    title: "Convertible Laptop",
    price: 950,
    category: "laptops",
    stock: 11,
  },
  {
    id: 23,
    title: "Camera Smartphone",
    price: 700,
    category: "phones",
    stock: 8,
  },
  {
    id: 24,
    title: "True Wireless Earbuds Pro",
    price: 180,
    category: "audio",
    stock: 9,
  },
  { id: 25, title: "Mini Laptop", price: 600, category: "laptops", stock: 22 },
  { id: 26, title: "5G Smartphone", price: 550, category: "phones", stock: 5 },
  {
    id: 27,
    title: "Turntable Speaker",
    price: 90,
    category: "audio",
    stock: 4,
  },
  {
    id: 28,
    title: "Creator Laptop",
    price: 1750,
    category: "laptops",
    stock: 4,
  },
  {
    id: 29,
    title: "Compact Smartphone",
    price: 320,
    category: "phones",
    stock: 17,
  },
  {
    id: 30,
    title: "Portable Speaker",
    price: 45,
    category: "audio",
    stock: 40,
  },
];

function findProductById(products, id) {
  return products.find((p) => p.id === id);
}

function getLowStockProducts(products, threshold = 10) {
  return products.filter((p) => p.stock < threshold);
}

function updateStock(products, id, newStock) {
  return products.map((p) => (p.id === id ? { ...p, stock: newStock } : p));
}

// Bagian 3 — Nested Data
function getAllTagsNested(products) {
  const result = [];
  for (const p of products) {
    result.push(p.tags);
  }
  return result;
}

function findProductsByTag(products, tag) {
  return products.filter((p) => p.tags.includes(tag));
}

function getReviewCounts(products) {
  return products.map((p) => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length,
  }));
}

function getFiveStarReviews(products) {
  const result = [];
  for (const p of products) {
    for (const review of p.reviews) {
      if (review.rating === 5) {
        result.push({ productId: p.id, productTitle: p.title, ...review });
      }
    }
  }
  return result;
}

function getCalculatedAverageRating(product) {
  if (product.reviews.length === 0) return 0;
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}

function getAllCalculatedRatings(products) {
  return products.map((p) => ({
    id: p.id,
    title: p.title,
    fieldRating: p.rating,
    calculatedRating: getCalculatedAverageRating(p),
  }));
}

function getMostReviewedProduct(products) {
  return products.reduce((mostReviewed, current) =>
    current.reviews.length > mostReviewed.reviews.length
      ? current
      : mostReviewed,
  );
}

function getAllReviewRatingsFlat(products) {
  const ratings = [];
  for (const p of products) {
    for (const review of p.reviews) {
      ratings.push(review.rating);
    }
  }
  return ratings;
}

// Bagian 4 — Flattening Data
const tagsNested = [
  ["computer", "office"],
  ["electronics"],
  ["gaming", "computer"],
];

tagsNested.flat();

const sampleProducts = [
  { title: "Laptop", tags: ["computer", "office"] },
  { title: "Phone", tags: ["mobile"] },
];

sampleProducts.flatMap((p) => p.tags);

function getAllTagsFlat(products) {
  return products.flatMap((p) => p.tags);
}

function getAllCommentsFlat(products) {
  return products.flatMap((p) => p.reviews.map((r) => r.comment));
}

// Bagian 5 — Map, Filter, Reduce dalam Konteks Nyata
function getAveragePriceByCategory(products, category) {
  const prices = products
    .filter((p) => p.category === category)
    .map((p) => p.price);

  if (prices.length === 0) return 0;
  return prices.reduce((a, b) => a + b, 0) / prices.length;
}

function getStatistics(products) {
  const prices = products.map((p) => p.price);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);

  return {
    totalProducts: products.length,
    averagePrice: prices.reduce((a, b) => a + b, 0) / products.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock,
    averageRating: totalRating / products.length,
  };
}

// Bagian 5 — Map, Filter, Reduce dalam Konteks Nyata
function getAveragePriceByCategory(products, category) {
  const prices = products
    .filter((p) => p.category === category)
    .map((p) => p.price);

  if (prices.length === 0) return 0;
  return prices.reduce((a, b) => a + b, 0) / prices.length;
}

function getStatistics(products) {
  const prices = products.map((p) => p.price);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);

  return {
    totalProducts: products.length,
    averagePrice: prices.reduce((a, b) => a + b, 0) / products.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock,
    averageRating: totalRating / products.length,
  };
}

// Bagian 6 — Searching (Linear Search)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

function linearSearchProductById(products, id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) return i;
  }
  return -1;
}

// Bagian 7 — Binary Search
function binarySearch(sortedArray, target) {
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

function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return mid;
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// Bagian 8 — Sorting
function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

// Bagian 9 — Grouping dan Aggregation
function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

function summarizeCategoryCounts(products) {
  const grouped = groupByCategory(products);
  return Object.entries(grouped).map(([category, items]) => ({
    category,
    jumlahProduk: items.length,
  }));
}

// Bagian 10 - Frequency Counting
function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

function frequencyByCategory(products) {
  return countFrequency(products.map((p) => p.category));
}

function frequencyByTags(products) {
  return countFrequency(products.flatMap((p) => p.tags));
}

function frequencyByRating(products) {
  return countFrequency(products.map((p) => Math.round(p.rating)));
}

function frequencyByBrand(products) {
  const brands = products
    .map((p) => p.brand)
    .filter((brand) => brand !== undefined);
  return countFrequency(brands);
}

// Bagian 11 — Set
function getUniqueCategories(products) {
  return [...new Set(products.map((p) => p.category))];
}

function getUniqueBrands(products) {
  return [
    ...new Set(products.map((p) => p.brand).filter((b) => b !== undefined)),
  ];
}

function getUniqueTags(products) {
  return [...new Set(products.flatMap((p) => p.tags))];
}

// Bagian 12 — Map (Struktur Data)
function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

// Bagian 13 — Stack (LIFO)
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const searchHistory = new Stack();

function recordSearch(keyword) {
  searchHistory.push(keyword);
}

function undoSearch() {
  if (searchHistory.isEmpty()) return null;
  searchHistory.pop();
  return searchHistory.peek() ?? null;
}

// Bagian 14 — Queue (FIFO)
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Bagian 15 — Recursion
const categoryTree = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      { name: "Phone", children: [] },
    ],
  },
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth) + category.name);
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

// Bagian 16 — Algorithm Complexity
// Latihan 16.1: linearSearch & binarySearch versi menghitung jumlah langkah
function linearSearchCountSteps(array, target) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target) return { index: i, steps };
  }
  return { index: -1, steps };
}

function binarySearchCountSteps(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  let steps = 0;
  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return { index: mid, steps };
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return { index: -1, steps };
}

function generateSortedArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) arr.push(i);
  return arr;
}

// Latihan 16.2: nested loop O(n^2) vs grouping berbasis Map O(n)
function generateProductsForComplexityTest(size) {
  const arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push({ id: i, category: `category-${i % 20}` });
  }
  return arr;
}

function findSameCategoryPairsNestedLoop(items) {
  let comparisons = 0;
  let pairCount = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      comparisons++;
      if (items[i].category === items[j].category) pairCount++;
    }
  }
  return { comparisons, pairCount };
}

function findSameCategoryPairsWithMap(items) {
  let operations = 0;
  const groups = new Map();
  for (const item of items) {
    operations++;
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  }
  let pairCount = 0;
  for (const group of groups.values()) {
    const n = group.length;
    pairCount += (n * (n - 1)) / 2;
    operations++;
  }
  return { operations, pairCount };
}

console.log("\nBagian 1 — JavaScript Fundamentals");
console.log(
  "calculateDiscountedPrice(1000, 10):",
  calculateDiscountedPrice(1000, 10),
);
console.log("applyDiscounts(cart):", applyDiscounts(cart));

console.log("\nBagian 2 — Data Representation");
console.log("findProductById(id=5):", findProductById(productsBagian2, 5));
console.log(
  "getLowStockProducts(threshold=10):",
  getLowStockProducts(productsBagian2, 10),
);
console.log(
  "updateStock(id=1, newStock=50):",
  updateStock(productsBagian2, 1, 50).find((p) => p.id === 1),
);

console.log("\nBagian 3 — Nested Data");
console.log("getAllTagsNested:", getAllTagsNested(products));
console.log(
  "findProductsByTag('beauty'):",
  findProductsByTag(products, "beauty"),
);
console.log("getReviewCounts:", getReviewCounts(products));
console.log("getFiveStarReviews:", getFiveStarReviews(products));
console.log("getAllCalculatedRatings:", getAllCalculatedRatings(products));
console.log("getMostReviewedProduct:", getMostReviewedProduct(products).title);
console.log("getAllReviewRatingsFlat:", getAllReviewRatingsFlat(products));

console.log("\nBagian 4 — Flattening Data");
console.log("getAllTagsFlat:", getAllTagsFlat(products));
console.log("getAllCommentsFlat:", getAllCommentsFlat(products));

console.log("\nBagian 5 — Map, Filter, Reduce");
console.log(
  "getAveragePriceByCategory('laptops'):",
  getAveragePriceByCategory(productsBagian2, "laptops"),
);
console.log("getStatistics:", getStatistics(products));

console.log("\nBagian 6 — Searching (Linear Search");
console.log(
  "linearSearch([5,12,8,23,1], 23):",
  linearSearch([5, 12, 8, 23, 1], 23),
);
console.log(
  "linearSearchProductById(id=17):",
  linearSearchProductById(productsBagian2, 17),
);

console.log("\nBagian 7 — Binary Search");
console.log(
  "binarySearch([1,3,5,7,9,11], 7):",
  binarySearch([1, 3, 5, 7, 9, 11], 7),
);
const productsSortedByPrice = sortProducts(productsBagian2, "price-asc");
console.log(
  "binarySearchByPrice(targetPrice=800):",
  binarySearchByPrice(productsSortedByPrice, 800),
);

console.log("\nBagian 8 — Sorting");
console.log("bubbleSort([5,3,8,1,9,2]):", bubbleSort([5, 3, 8, 1, 9, 2]));
console.log(
  "sortProducts('rating'):",
  sortProducts(products, "rating").map((p) => p.title),
);

console.log("\nBagian 9 — Grouping dan Aggregation");
console.log("groupByCategory:", groupByCategory(productsBagian2));
console.log(
  "summarizeCategoryCounts:",
  summarizeCategoryCounts(productsBagian2),
);

console.log("\n Bagian 10 — Frequency Counting");
console.log("frequencyByCategory:", frequencyByCategory(productsBagian2));
console.log("frequencyByTags:", frequencyByTags(products));
console.log("frequencyByRating:", frequencyByRating(products));
console.log("frequencyByBrand:", frequencyByBrand(products));

console.log("\nBagian 11 — Set");
console.log("getUniqueCategories:", getUniqueCategories(productsBagian2));
console.log("getUniqueBrands:", getUniqueBrands(products));
console.log("getUniqueTags:", getUniqueTags(products));

console.log("\nBagian 12 — Map (Struktur Data");
const productLookup = buildProductLookup(productsBagian2);
console.log("buildProductLookup -> get(id=10):", productLookup.get(10));

console.log("\nBagian 13 — Stack (LIFO)");
recordSearch("laptop");
recordSearch("phone");
recordSearch("tablet");
console.log(
  "searchHistory setelah 3x recordSearch, peek():",
  searchHistory.peek(),
);
console.log("undoSearch():", undoSearch());

console.log("\nBagian 14 — Queue (FIFO)");
const requestQueue = new Queue();
requestQueue.enqueue("request-1");
requestQueue.enqueue("request-2");
requestQueue.enqueue("request-3");
console.log("dequeue():", requestQueue.dequeue());
console.log("peek() setelah 1x dequeue:", requestQueue.peek());

console.log("\nBagian 15 — Recursion");
printCategories(categoryTree);

console.log("\nBagian 16 — Algorithm Complexity");
const sortedArray10000 = generateSortedArray(10000);
console.log(
  "linearSearchCountSteps(target=9999):",
  linearSearchCountSteps(sortedArray10000, 9999),
);
console.log(
  "binarySearchCountSteps(target=9999):",
  binarySearchCountSteps(sortedArray10000, 9999),
);
const testItems1000 = generateProductsForComplexityTest(1000);
console.log(
  "findSameCategoryPairsNestedLoop:",
  findSameCategoryPairsNestedLoop(testItems1000),
);
console.log(
  "findSameCategoryPairsWithMap:",
  findSameCategoryPairsWithMap(testItems1000),
);

module.exports = {
  calculateDiscountedPrice,
  applyDiscounts,
  cart,
  productsBagian2,
  findProductById,
  getLowStockProducts,
  updateStock,
  getAllTagsNested,
  findProductsByTag,
  getReviewCounts,
  getFiveStarReviews,
  getCalculatedAverageRating,
  getAllCalculatedRatings,
  getMostReviewedProduct,
  getAllReviewRatingsFlat,
  getAllTagsFlat,
  getAllCommentsFlat,
  groupByCategory,
  summarizeCategoryCounts,
  countFrequency,
  frequencyByCategory,
  frequencyByTags,
  frequencyByRating,
  frequencyByBrand,
  getUniqueCategories,
  getUniqueBrands,
  getUniqueTags,
  buildProductLookup,
  Stack,
  searchHistory,
  recordSearch,
  undoSearch,
  Stack,
  searchHistory,
  recordSearch,
  undoSearch,
  Queue,
  categoryTree,
  printCategories,
  linearSearchCountSteps,
  binarySearchCountSteps,
  generateSortedArray,
  generateProductsForComplexityTest,
  findSameCategoryPairsNestedLoop,
  findSameCategoryPairsWithMap,
};
