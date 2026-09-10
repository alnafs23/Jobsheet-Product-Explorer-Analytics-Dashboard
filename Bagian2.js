const products = [
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

module.exports = {
  products,
  findProductById,
  getLowStockProducts,
  updateStock,
};
