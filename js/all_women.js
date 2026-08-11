document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "WOMEN'S ALLBIRDS SLIDE",
      colorName: "Anthracite",
      colors: ["Beige"],
      url: "productwom.html",
      price: 27,
      oldPrice: 55,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Slippers",
      material: "Tree",
      image: "img/new.arrivals4.png",
      isNew: true
    },
    {
      name: "WOMEN'S BREEZER POINT",
      colorName: "Dapple Rose",
      colors: ["Red"],
      url: "productwom2.html",
      price: 95,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Flats",
      material: "Tree",
      image: "img/new.arrivals8.png",
      isNew: true
    },
    {
      name: "WOMEN'S WOOL RUNNER",
      colorName: "Natural Black",
      colors: ["Black"],
      url: "productwom3.html",
      price: 110,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Running Shoes",
      material: "Wool",
      image: "img/best.seller7.png",
      isNew: false
    },
    {
      name: "WOMEN'S WOOL RUNNER",
      colorName: "Natural White",
      colors: ["White"],
      url: "productwom4.html",
      price: 110,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Running Shoes",
      material: "Wool",
      image: "img/best.seller8.png",
      isNew: false
    },
    {
      name: "WOMEN'S TREE GLIDER",
      colorName: "Natural Black",
      colors: ["Black"],
      price: 140,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/best.seller9.png",
      isNew: false
    },
    {
      name: "WOMEN'S TREE GLIDER",
      colorName: "Blizzard",
      colors: ["White"],
      price: 140,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/best.seller10.png",
      isNew: false
    },
    {
      name: "WOMEN'S CANVAS CRUISER SLIP ON",
      colorName: "Warm White",
      colors: ["White"],
      price: 75,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Slip Ons",
      material: "Cotton",
      image: "img/new.arrivals12.png",
      isNew: true
    },
    {
      name: "WOMEN'S BREEZER POINT",
      colorName: "Warm Red",
      colors: ["Red"],
      price: 125,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Flats",
      material: "Cotton",
      image: "img/new.arrivals13.png",
      isNew: true
    },
    {
      name: "WOMEN'S CRUISER SLIP ON",
      colorName: "Blizzard",
      colors: ["White"],
      price: 100,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Slip Ons",
      material: "Cotton",
      image: "img/new.arrivals14.png",
      isNew: true
    },
    {
      name: "WOMEN'S ALLBIRDS FLIP FLOP",
      colorName: "Mushroom",
      colors: ["Beige"],
      price: 25,
      oldPrice: 50,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Slippers",
      material: "Tree",
      image: "img/new.arrivals15.png",
      isNew: true
    },
    {
      name: "WOMEN'S ALLBIRDS FLIP FLOP",
      colorName: "Natural Black",
      colors: ["Back"],
      price: 25,
      oldPrice: 50,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Slippers",
      material: "Tree",
      image: "img/new.arrivals16.png",
      isNew: true
    },
    {
      name: "WOMEN'S ALLBIRDS FLIP FLOP",
      colorName: "Anthracite",
      colors: ["Grey"],
      price: 25,
      oldPrice: 50,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Slippers",
      material: "Tree",
      image: "img/new.arrivals17.png",
      isNew: true
    },
    {
      name: "WOMEN'S WOOL CRUISER",
      colorName: "Natural Grey",
      colors: ["Grey"],
      price: 105,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Wool",
      image: "img/new.arrivals18.png",
      isNew: true
    },
    {
      name: "WOMEN'S WOOL RUNNER NZ WATERPROOF",
      colorName: "Medium Grey",
      colors: ["Grey"],
      price: 150,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Wool",
      image: "img/new.arrivals19.png",
      isNew: true
    },
    {
      name: "WOMEN'S TREE RUNNER NZ",
      colorName: "Weathered Brown",
      colors: ["Brown"],
      price: 80,
      oldPrice: 100,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/new.arrivals20.png",
      isNew: true
    },
    {
      name: "WOMEN'S STRIDER",
      colorName: "Rugged Beige",
      colors: ["Beige"],
      price: 91,
      oldPrice: 130,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all28.png",
      isNew: false
    },
    {
      name: "WOMEN'S STRIDER",
      colorName: "Blizzard",
      colors: ["White"],
      price: 91,
      oldPrice: 130,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all30.png",
      isNew: false
    },
    {
      name: "WOMEN'S STRIDER",
      colorName: "Blizzard/Dark Navy",
      colors: ["White", "Blue"],
      price: 91,
      oldPrice: 130,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all29.png",
      isNew: false
    },
    {
      name: "WOMEN'S TREE TOPPER",
      colorName: "Rustic Brown",
      colors: ["Brown"],
      price: 115,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all31.png",
      isNew: false
    },
    {
      name: "WOMEN'S TREE TOPPER",
      colorName: "Blizzard",
      colors: ["White"],
      price: 115,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all32.png",
      isNew: false
    },
    {
      name: "WOMEN'S TREE TOPPER",
      colorName: "Natural Black",
      colors: ["Black"],
      price: 115,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all33.png",
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