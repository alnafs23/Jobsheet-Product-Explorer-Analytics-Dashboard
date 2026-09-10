const { products } = require("./data-nested.js");
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
