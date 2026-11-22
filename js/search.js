document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Men's Flow Runner Slip On",
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
      name: "Men's Flow Runner Slip On",
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
      name: "Men's Flow Runner Slip On",
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
      name: "WOMEN'S NOVART SLIDE",
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
      name: "MEN'S FLOW RUNNER RAIN",
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
      name: "MEN'S CAMPUS AIRY",
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
      name: "Men's Drift",
      colorName: "Dark Navy",
      colors: ["Black"],
      price: 100,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Canavs",
      image: "img/best.seller4.png",
      isNew: false
    },
    {
      name: "Men's Drift",
      colorName: "Port",
      colors: ["Red"],
      price: 100,
      sizes: ["8", "9", "10", "11", "12"],
      type: "Everyday Sneakers",
      material: "Canvas",
      image: "img/best.seller5.png",
      isNew: false
    },
    {
      name: "Men's Drift",
      colorName: "Medium Grey",
      colors: ["Grey"],
      price: 100,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Canvas",
      image: "img/best.seller6.png",
      isNew: false
    },
    {
      name: "WOMEN'S FLOW RUNNER",
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
      name: "WOMEN'S FLOW RUNNER",
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
      name: "WOMEN'S AERO GLIDE",
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
      name: "WOMEN'S AERO GLIDE",
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
      name: "MEN'S FLOW RUNNER RAIN",
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
      name: "MEN'S FLOW RUNNER MID WATERPROOF",
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
      name: "MEN'S DRIFT",
      colorName: "Dark Navy",
      colors: ["Blue"],
      price: 105,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Wool",
      image: "img/new.arrivals11.png",
      isNew: true
    },
    {
      name: "WOMEN'S CANVAS DRIFT SLIP ON",
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
      name: "WOMEN'S DRIFT SLIP ON",
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
      name: "WOMEN'S NOVART FLIP FLOP",
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
      name: "WOMEN'S NOVART FLIP FLOP",
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
      name: "WOMEN'S NOVART FLIP FLOP",
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
      name: "WOMEN'S DRIFT",
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
      name: "WOMEN'S FLOW RUNNER WATERPROOF",
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
      name: "WOMEN'S AERO RUNNER",
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
      name: "WOMEN'S AERO TOP",
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
      name: "WOMEN'S AERO TOP",
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
      name: "WOMEN'S AERO TOP",
      colorName: "Natural Black",
      colors: ["Black"],
      price: 115,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all33.png",
      isNew: false
    },
    {
      name: "MEN'S SPRINT RELAY",
      colorName: "Hanami Blue",
      colors: ["Blue"],
      price: 99,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Running Shoes",
      material: "Tree",
      image: "img/all34.png",
      isNew: false
    },
    {
      name: "MEN'S SPRINT RELAY",
      colorName: "Medium Grey",
      colors: ["Grey"],
      price: 99,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Running Shoes",
      material: "Tree",
      image: "img/all35.png",
      isNew: false
    },
    {
      name: "MEN'S AERO RUNNER GO",
      colorName: "True Black",
      colors: ["Black"],
      price: 89,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Running Shoes",
      material: "Tree",
      image: "img/all36.png",
      isNew: false
    },
    {
      name: "MEN'S AERO RUNNER GO",
      colorName: "Blizzard",
      colors: ["White"],
      price: 89,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Running Shoes",
      material: "Tree",
      image: "img/all37.png",
      isNew: false
    },
    {
      name: "MEN'S AERO SKIP",
      colorName: "Natural Black",
      colors: ["Black"],
      price: 52,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all38.png",
      isNew: false
    },
    {
      name: "MEN'S AERO SKIP",
      colorName: "Luxe Gold",
      colors: ["Yellow"],
      price: 52,
      sizes: ["6", "7", "8", "9", "10"],
      type: "Everyday Sneakers",
      material: "Tree",
      image: "img/all39.png",
      isNew: false
    }
  ];

  const searchInput = document.getElementById("productSearch");
  const productGrid = document.getElementById("productGrid");
  const resultsCount = document.getElementById("resultsCount");
  const emptyState = document.getElementById("emptyState");

  function createProductCard(product) {
    const priceHtml = product.oldPrice
      ? `
        <span class="sale-price">$${product.price}</span>
        <span class="old-price">$${product.oldPrice}</span>
      `
      : `<span class="regular-price">$${product.price}</span>`;

    return `
      <article class="col">
        <a href="${product.url || "#"}" class="product-card-link">
          <div class="product-card">
            <div class="image-wrap">
              ${product.isNew ? '<span class="badge-new">NEW</span>' : ""}
              <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
              >
            </div>

            <div class="product-info">
              <h2 class="product-name">${product.name}</h2>
              <p class="product-color">${product.colorName || ""}</p>
              <p class="price">${priceHtml}</p>
            </div>
          </div>
        </a>
      </article>
    `;
  }

  function renderProducts(list, query = "") {
    productGrid.innerHTML = list.map(createProductCard).join("");

    emptyState.hidden = list.length > 0;

    resultsCount.textContent = query
      ? `${list.length} product${list.length === 1 ? "" : "s"} found`
      : "";
  }

  function searchProducts() {
    const query = searchInput.value.trim().toLowerCase();

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    renderProducts(filteredProducts, query);
  }

  searchInput.addEventListener("input", searchProducts);

  renderProducts(products);
});