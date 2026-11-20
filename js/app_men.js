document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Men's Runner NZ Slip On",
      colorName: "Mushroom",
      colors: ["Beige"],
      url: "product.html",
      price: 75,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Everyday Sneakers",
      material: "Alternative-Leather",
      image: "img/best.seller1.png",
      isNew: true
    },
    {
      name: "Men's Runner NZ Slip On",
      colorName: "Sea Spray",
      colors: ["Blue"],
      url: "product2.html",
      price: 75,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Alternative-Leather",
      image: "img/best.seller2.png",
      isNew: true
    },
    {
      name: "Men's Runner NZ Slip On",
      colorName: "Warm White",
      colors: ["White"],
      url: "product3.html",
      price: 75,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Everyday Sneakers",
      material: "Alternative-Leather",
      image: "img/best.seller3.png",
      isNew: true
    },
    {
      name: "MEN'S NOVART SLIDE",
      colorName: "Natural Black",
      colors: ["Black"],
      price: 27,
      oldPrice: 55,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Slippers",
      material: "Tree",
      image: "img/new.arrivals5.png",
      isNew: true
    },
    {
      name: "MEN'S WOOL RUNNER MIZZLE",
      colorName: "Blush",
      colors: ["Grey"],
      price: 120,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Running Shoes",
      material: "Wool",
      image: "img/new.arrivals6.png",
      isNew: true
    },
    {
      name: "MEN'S VARSITY AIRY",
      colorName: "Natural White",
      colors: ["White"],
      price: 125,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/new.arrivals7.png",
      isNew: true
    },
    {
      name: "MEN'S WOOL RUNNER MIZZLE",
      colorName: "Midnight Navy",
      colors: ["Green"],
      price: 120,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Running Shoes",
      material: "Wool",
      image: "img/new.arrivals9.png",
      isNew: true
    },
    {
      name: "MEN'S WOOL RUNNER NZ MID WATERPROOF",
      colorName: "Natural Black",
      colors: ["Black"],
      price: 160,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Wool",
      image: "img/new.arrivals10.png",
      isNew: true
    },
    {
      name: "MEN'S CRUISER",
      colorName: "Dark Navy",
      colors: ["Blue"],
      price: 105,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Wool",
      image: "img/new.arrivals11.png",
      isNew: true
    }
  ];

  const selected = {
    sizes: new Set(),
    colors: new Set(),
    prices: new Set(),
    types: new Set(),
    materials: new Set()
  };

  const grid = document.getElementById("productGrid");
  const filterPanel = document.getElementById("filterPanel");
  const filterToggle = document.querySelector(".filter-toggle");
  const closeFilter = document.querySelector(".close-filter");

  filterToggle.addEventListener("click", () => {
    filterPanel.hidden = !filterPanel.hidden;
  });

  closeFilter.addEventListener("click", () => {
    filterPanel.hidden = true;
  });
  const emptyState = document.getElementById("emptyState");
  const sortSelect = document.getElementById("sortSelect");

  function priceMatches(price, priceRange) {
    const ranges = {
      "Under $75": price < 75,
      "$76 - $100": price >= 76 && price <= 100,
      "$101 - $125": price >= 101 && price <= 125,
      "$126 - $150": price >= 126 && price <= 150,
      "Over $150": price > 150
    };

    return ranges[priceRange];
  }

  function hasMatch(selectedValues, productValues) {
    if (selectedValues.size === 0) return true;

    return productValues.some(value => selectedValues.has(String(value)));
  }

  function productMatches(product) {
    const sizeMatches = hasMatch(selected.sizes, product.sizes);
    const colorMatches = hasMatch(selected.colors, product.colors);
    const typeMatches = hasMatch(selected.types, [product.type]);
    const materialMatches = hasMatch(selected.materials, [product.material]);

    const priceMatchesFilter =
      selected.prices.size === 0 ||
      [...selected.prices].some(range => priceMatches(product.price, range));

    return (
      sizeMatches &&
      colorMatches &&
      typeMatches &&
      materialMatches &&
      priceMatchesFilter
    );
  }

  function renderProducts() {
    let filteredProducts = products.filter(productMatches);

    if (sortSelect?.value === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortSelect?.value === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sortSelect?.value === "name") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    grid.innerHTML = filteredProducts.map(product => `
  <article class="col">
    <a href="${product.url}" class="product-card-link">
      <div class="product-card">
        <div class="image-wrap">
          ${product.isNew ? '<span class="badge-new">NEW</span>' : ""}
          <img class="product-image" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-color">${product.colorName}</p>


          <p class="price">
  ${product.oldPrice
        ? `
        <span class="sale-price">$${product.price}</span>
        <span class="old-price">$${product.oldPrice}</span>
      `
        : `<span class="regular-price">$${product.price}</span>`
      }
</p>


        </div>
      </div>
    </a>
  </article>
`).join("");

    emptyState.hidden = filteredProducts.length > 0;

    document.querySelectorAll(".product-count").forEach(element => {
      element.textContent = `(${filteredProducts.length} products)`;
    });
  }

  document.querySelectorAll("[data-group]").forEach(input => {
    input.addEventListener("change", () => {
      const group = input.dataset.group;
      const value = input.value;

      if (input.checked) {
        selected[group].add(value);
      } else {
        selected[group].delete(value);
      }

      renderProducts();
    });
  });

  document.querySelectorAll(".size-button").forEach(button => {
    button.addEventListener("click", () => {
      const size = button.dataset.size;

      button.classList.toggle("active");

      if (selected.sizes.has(size)) {
        selected.sizes.delete(size);
      } else {
        selected.sizes.add(size);
      }

      renderProducts();
    });
  });

  sortSelect?.addEventListener("change", renderProducts);

  document.getElementById("clearFilters")?.addEventListener("click", () => {
    Object.values(selected).forEach(set => set.clear());

    document.querySelectorAll("[data-group]").forEach(input => {
      input.checked = false;
    });

    document.querySelectorAll(".size-button").forEach(button => {
      button.classList.remove("active");
    });

    renderProducts();
  });

  renderProducts();
});
