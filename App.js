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
// ===================================================
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
};
