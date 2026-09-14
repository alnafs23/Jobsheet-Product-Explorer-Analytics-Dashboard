// js/utils.js — helper umum

// Latihan 1.1 — Menghitung harga setelah diskon
export function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

// Latihan 1.2 — Menerapkan diskon pada array of objects (cart)
export function applyDiscounts(cart) {
  const result = [];
  for (const item of cart) {
    result.push({
      ...item,
      finalPrice: calculateDiscountedPrice(
        item.price,
        item.discountPercent ?? 0,
      ),
    });
  }
  return result;
}

// Format angka menjadi mata uang, dipakai saat render harga
export function formatCurrency(value, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}

// Latihan 2.1 — Mencari produk berdasarkan id (immutable, pakai find())
export function findProductById(products, id) {
  return products.find((p) => p.id === id);
}

// Latihan 2.2 — Produk dengan stok menipis
export function getLowStockProducts(products, threshold = 10) {
  return products.filter((p) => p.stock < threshold);
}

// Latihan 2.3 — Update stok tanpa mutasi (immutability)
export function updateStock(products, id, newStock) {
  return products.map((p) => (p.id === id ? { ...p, stock: newStock } : p));
}

// Debounce untuk input search agar tidak render setiap ketukan keyboard
export function debounce(fn, delay = 300) {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Latihan 4.2 style helper
export function getAllComments(products) {
  return products.flatMap((p) => (p.reviews || []).map((r) => r.comment));
}

// Latihan Nested Data no. 5 — rata-rata rating dihitung ulang dari reviews (bukan field rating)
export function calculateAverageReviewRating(product) {
  const reviews = product.reviews || [];
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / reviews.length;
}
