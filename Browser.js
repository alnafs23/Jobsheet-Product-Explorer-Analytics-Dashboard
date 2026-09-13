const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    rating: 2.56,
    stock: 99,
    category: "beauty",
  },
  {
    id: 4,
    title: "Red Lipstick",
    price: 12.99,
    rating: 4.36,
    stock: 91,
    category: "beauty",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    price: 49.99,
    rating: 4.37,
    stock: 29,
    category: "fragrances",
  },
  {
    id: 8,
    title: "Dior J'adore",
    price: 89.99,
    rating: 3.8,
    stock: 98,
    category: "fragrances",
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    price: 499.99,
    rating: 4.88,
    stock: 26,
    category: "furniture",
  },
  {
    id: 16,
    title: "Apple",
    price: 1.99,
    rating: 4.19,
    stock: 8,
    category: "groceries",
  },
  {
    id: 30,
    title: "Kiwi",
    price: 2.49,
    rating: 4.93,
    stock: 99,
    category: "groceries",
  },
];

// Bagian 17 — DOM Manipulation
function renderProducts(list) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
  for (const product of list) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.append(card);
  }
}

// Latihan 17.1: render 5 produk dummy
renderProducts(products.slice(0, 5));
