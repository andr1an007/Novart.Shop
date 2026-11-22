const ncxDriftSizeList = document.querySelector("#ncxDriftSizeList");
const ncxDriftBagButton = document.querySelector("#ncxDriftBagButton");
const ncxDriftColourText = document.querySelector("#ncxDriftSelectedColour");
const ncxDriftImages = document.querySelectorAll(".ncx-cruiser-image");
const ncxDriftPrice = document.querySelector(".ncx-cruiser-price").textContent;
let ncxDriftSelectedSize = null;

const ncxDriftSizes = {
  women: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
  men: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
};

const ncxDriftPhotos = {
  "Sea Spray": [
    "img/best.seller2.png",
    "img/product2back.png",
    "img/product2on.png",
    "img/product2off.png",
    "img/product2both.png"
  ],
  "Mushroom": [
    "img/best.seller1.png",
    "img/product1back.png",
    "img/produkt1on.png",
    "img/product1off.png",
    "img/produkt1both.png"
  ],
  "Warm White": [
    "img/best.seller3.png",
    "img/product3back.png",
    "img/product3on.png",
    "img/product3off.png",
    "img/product3both.png"
  ]
};

function ncxDriftRenderSizes(sizeGroup) {
  ncxDriftSizeList.innerHTML = ncxDriftSizes[sizeGroup]
    .map((size) => `<button class="ncx-cruiser-size-button" type="button">${size}</button>`)
    .join("");

  document.querySelectorAll(".ncx-cruiser-size-button").forEach((sizeButton) => {
    sizeButton.addEventListener("click", () => {
      document
        .querySelectorAll(".ncx-cruiser-size-button")
        .forEach((button) => button.classList.remove("ncx-cruiser-size-button--selected"));

      sizeButton.classList.add("ncx-cruiser-size-button--selected");

      ncxDriftSelectedSize = sizeButton.textContent;
      ncxDriftBagButton.disabled = false;
      ncxDriftBagButton.textContent = `ADD TO CART — ${ncxDriftPrice}`;
    });
  });
}

function ncxDriftChangePhotos(colour) {
  ncxDriftImages.forEach((image, index) => {
    image.style.opacity = "0";

    setTimeout(() => {
      image.src = ncxDriftPhotos[colour][index];
      image.alt = `${colour} Canvas Drift`;
      image.style.opacity = "1";
    }, 180);
  });
}

document.querySelectorAll(".ncx-cruiser-swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document
      .querySelectorAll(".ncx-cruiser-swatch")
      .forEach((button) => button.classList.remove("ncx-cruiser-swatch--selected"));

    swatch.classList.add("ncx-cruiser-swatch--selected");
    ncxDriftColourText.textContent = swatch.dataset.ncxColour;

    ncxDriftChangePhotos(swatch.dataset.ncxColour);
  });
});

document.querySelectorAll(".ncx-cruiser-size-type").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".ncx-cruiser-size-type")
      .forEach((button) => button.classList.remove("ncx-cruiser-size-type--active"));

    tab.classList.add("ncx-cruiser-size-type--active");
    ncxDriftBagButton.disabled = true;
    ncxDriftBagButton.textContent = "Select a Size";

    ncxDriftRenderSizes(tab.dataset.ncxSizeGroup);
  });
});

ncxDriftBagButton.addEventListener("click", () => {
  if (ncxDriftBagButton.disabled || !ncxDriftSelectedSize) return;

  if (!window.NovartShopCart) {
    console.error("cart.js is not connected or loaded after product.js");
    return;
  }

  const name = document.querySelector(".ncx-cruiser-title").textContent.trim();
  const color = ncxDriftColourText.textContent.trim();
  const price = Number(ncxDriftPrice.replace(/[^0-9.]/g, ""));
  const image = ncxDriftPhotos[color][0];

  window.NovartShopCart.add({
    id: `${name}-${color}-${ncxDriftSelectedSize}`,
    name: name,
    color: color,
    size: ncxDriftSelectedSize.trim(),
    price: price,
    image: image,
  });

  ncxDriftBagButton.textContent = "Added to Bag ✓";

  setTimeout(() => {
    ncxDriftBagButton.textContent = `ADD TO CART — ${ncxDriftPrice}`;
  }, 1200);
});

ncxDriftRenderSizes("men");

const ncxDriftInitialSwatch = document.querySelector(
  ".ncx-cruiser-swatch--selected"
);

if (ncxDriftInitialSwatch) {
  ncxDriftColourText.textContent =
    ncxDriftInitialSwatch.dataset.ncxColour;
}

























const nvrtAccordionItems = document.querySelectorAll(".nvrt-accordion-item");

nvrtAccordionItems.forEach((item) => {
  const button = item.querySelector(".nvrt-accordion-trigger");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("nvrt-accordion-item--open");

    nvrtAccordionItems.forEach((accordionItem) => {
      accordionItem.classList.remove("nvrt-accordion-item--open");
      accordionItem
        .querySelector(".nvrt-accordion-trigger")
        .setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("nvrt-accordion-item--open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});













const nvrtBreatheSection = document.querySelector("#nvrtBreatheScroll");
const nvrtBreatheStage = nvrtBreatheSection.querySelector(".nvrt-breathe-sticky");

function nvrtClamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

function nvrtEaseOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function nvrtUpdateBreatherShoe() {
  const sectionBox = nvrtBreatheSection.getBoundingClientRect();
  const scrollDistance = nvrtBreatheSection.offsetHeight - window.innerHeight;

  const rawProgress = -sectionBox.top / scrollDistance;
  const progress = nvrtClamp(rawProgress, 0, 1);
  const easedProgress = nvrtEaseOutCubic(progress);

  const shoeY = 130 - easedProgress * 130;
  const shoeRotation = 16 - easedProgress * 16;
  const shoeScale = 0.82 + easedProgress * 0.18;

  nvrtBreatheStage.style.setProperty("--nvrt-shoe-y", `${shoeY}vh`);
  nvrtBreatheStage.style.setProperty("--nvrt-shoe-rotation", `${shoeRotation}deg`);
  nvrtBreatheStage.style.setProperty("--nvrt-shoe-scale", shoeScale);
  nvrtBreatheStage.style.setProperty("--nvrt-shoe-opacity", easedProgress);
  nvrtBreatheStage.style.setProperty("--nvrt-orbit-opacity", easedProgress * 0.9);
  nvrtBreatheStage.style.setProperty(
    "--nvrt-orbit-scale",
    0.75 + easedProgress * 0.25
  );
}

let nvrtScrollTicking = false;

window.addEventListener(
  "scroll",
  () => {
    if (!nvrtScrollTicking) {
      window.requestAnimationFrame(() => {
        nvrtUpdateBreatherShoe();
        nvrtScrollTicking = false;
      });

      nvrtScrollTicking = true;
    }
  },
  { passive: true }
);

window.addEventListener("resize", nvrtUpdateBreatherShoe);

nvrtUpdateBreatherShoe();













const novaImpactSection = document.querySelector("#novaImpactSection");
const novaImpactOrbits = document.querySelector("#novaImpactOrbits");

const novaOrbitDots = [
  {
    element: document.querySelector("#novaImpactDotA"),
    label: document.querySelector("#novaImpactLabelA"),

    centerX: 500,
    centerY: 300,
    radiusX: 410,
    radiusY: 270,

    startAngle: 0.1,
    endAngle: Math.PI,
    laps: 1.35
  },
  {
    element: document.querySelector("#novaImpactDotB"),
    label: document.querySelector("#novaImpactLabelB"),

    centerX: 500,
    centerY: 300,
    radiusX: 385,
    radiusY: 245,

    startAngle: 2.5,
    endAngle: -0.85,
    laps: 1.15
  },
  {
    element: document.querySelector("#novaImpactDotC"),
    label: document.querySelector("#novaImpactLabelC"),

    centerX: 500,
    centerY: 300,
    radiusX: 360,
    radiusY: 220,

    startAngle: 4.4,
    endAngle: 0.85,
    laps: 1.25
  }
];

let novaImpactAnimationPlayed = false;

function novaEaseOutCubic(progress) {
  return 1 - Math.pow(1 - progress, 3);
}

function novaSetDotPosition(dot, angle) {
  const x = dot.centerX + Math.cos(angle) * dot.radiusX;
  const y = dot.centerY + Math.sin(angle) * dot.radiusY;

  dot.element.setAttribute("cx", x);
  dot.element.setAttribute("cy", y);

  return { x, y };
}

function novaStartOrbitAnimation() {
  if (novaImpactAnimationPlayed) return;

  novaImpactAnimationPlayed = true;

  const animationDuration = 2600;
  const animationStartedAt = performance.now();

  function animateDots(currentTime) {
    const elapsedTime = currentTime - animationStartedAt;
    const progress = Math.min(elapsedTime / animationDuration, 1);
    const smoothProgress = novaEaseOutCubic(progress);

    novaOrbitDots.forEach((dot) => {
      const currentAngle =
        dot.startAngle +
        (dot.endAngle - dot.startAngle + dot.laps * Math.PI * 2) *
        smoothProgress;

      novaSetDotPosition(dot, currentAngle);
    });

    if (progress < 1) {
      requestAnimationFrame(animateDots);
      return;
    }


    novaOrbitDots.forEach((dot) => {
      const finalX = dot.element.getAttribute("cx");
      const finalY = dot.element.getAttribute("cy");

      dot.label.setAttribute(
        "transform",
        `translate(${finalX} ${finalY})`
      );

      dot.element.style.opacity = "0";
    });

    novaImpactOrbits.classList.add("nova-impact-orbits--finished");
  }

  requestAnimationFrame(animateDots);
}

const novaImpactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        novaStartOrbitAnimation();
      }
    });
  },
  {
    threshold: 0.5
  }
);

novaImpactObserver.observe(novaImpactSection);


novaOrbitDots.forEach((dot) => {
  novaSetDotPosition(dot, dot.startAngle);
});
