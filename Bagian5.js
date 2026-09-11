const { products } = require("./dataNested.js");
const laptopPrices = products
  .filter((p) => p.category === "beauty")
  .map((p) => p.price);

const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

console.log(avg);

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

console.log(getStatistics(products));
