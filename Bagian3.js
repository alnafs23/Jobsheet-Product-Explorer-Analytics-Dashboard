const { products } = require("./data-nested.js");
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
        // sertakan konteks produk agar review tidak "lepas konteks"
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
  // reduce untuk mencari nilai maksimum berdasarkan p.reviews.length
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

module.exports = {
  products,
  getAllTagsNested,
  findProductsByTag,
  getReviewCounts,
  getFiveStarReviews,
  getCalculatedAverageRating,
  getAllCalculatedRatings,
  getMostReviewedProduct,
  getAllReviewRatingsFlat,
};
