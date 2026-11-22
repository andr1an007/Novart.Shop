document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Novart Classic Watch 40mm",
      colorName: "Black",
      colors: ["Black"],
      price: 520,
      image: "img/tissotmy.png",
      isNew: false
    },
    {
      name: "Novart Solar Watch 39mm",
      colorName: "Black",
      colors: ["Black"],
      price: 560,
      image: "img/tissotnemy.png",
      isNew: false
    },
    {
      name: "Novart Heritage",
      colorName: "Beige",
      colors: ["Beige"],
      price: 213,
      image: "img/beg1.png",
      isNew: false
    },
    {
      name: "Novart Heritage",
      colorName: "Black",
      colors: ["Black"],
      price: 213,
      image: "img/beg2.png",
      isNew: false
    },
    {
      name: "Novart Studio",
      colorName: "Beige",
      colors: ["Beige"],
      price: 308,
      image: "img/beg3.png",
      isNew: false
    },
    {
      name: "Novart Studio",
      colorName: "Black",
      colors: ["Black"],
      price: 308,
      image: "img/beg4.png",
      isNew: false
    },
    {
      name: "Novart Classic",
      colorName: "Black",
      colors: ["Black"],
      price: 50,
      image: "img/ckblack.png",
      isNew: false
    },
    {
      name: "Novart Classic",
      colorName: "Brown",
      colors: ["Brown"],
      price: 50,
      image: "img/ckbrown.png",
      isNew: false
    },
    {
      name: "Novart Classic",
      colorName: "White",
      colors: ["White"],
      price: 50,
      image: "img/ckwhite.png",
      isNew: false
    },
    {
      name: "Novart Smart Glasses",
      colorName: "Black",
      colors: ["Black"],
      price: 550,
      image: "img/raybenblack.png",
      isNew: false
    },
    {
      name: "Novart Smart Glasses",
      colorName: "Blue",
      colors: ["Blue"],
      price: 550,
      image: "img/raybenblue.png",
      isNew: false
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





