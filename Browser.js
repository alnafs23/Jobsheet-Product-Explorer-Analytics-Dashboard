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

// Bagian 18 — State Management Sederhana (Tanpa Library)
const state = {
  products: products,
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle",
};

function render() {
  // ambil state.products, filter berdasarkan state.search dan state.category,
  // sort berdasarkan state.sortBy, lalu renderProducts(hasil)
  let result = state.products;

  // filter search
  if (state.search.trim() !== "") {
    const keyword = state.search.toLowerCase();
    result = result.filter((p) => p.title.toLowerCase().includes(keyword));
  }

  // filter category
  if (state.category !== "all") {
    result = result.filter((p) => p.category === state.category);
  }

  // sort
  switch (state.sortBy) {
    case "price-asc":
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result = [...result].sort((a, b) => b.rating - a.rating);
      break;
    case "title":
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  state.status = result.length === 0 ? "empty" : "success";
  renderProducts(result);
}

render();

// Bagian 19 — Event Handling
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
