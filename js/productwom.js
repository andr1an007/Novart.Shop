const ncxCruiserSizeList = document.querySelector("#ncxCruiserSizeList");
const ncxCruiserBagButton = document.querySelector("#ncxCruiserBagButton");
const ncxCruiserColourText = document.querySelector("#ncxCruiserSelectedColour");
const ncxCruiserImages = document.querySelectorAll(".ncx-cruiser-image");
const ncxCruiserPrice = document.querySelector(".ncx-cruiser-price").textContent;
let ncxCruiserSelectedSize = null;

const ncxCruiserSizes = {
  women: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
  men: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"]
};

const ncxCruiserPhotos = {
  "Anthracite": [
    "img/new.arrivals4.png",
    "img/productwomback.png",
    "img/productwomon.png",
    "img/productwomoff.png",
    "img/productwomboth.png"
  ]
};

function ncxCruiserRenderSizes(sizeGroup) {
  ncxCruiserSizeList.innerHTML = ncxCruiserSizes[sizeGroup]
    .map((size) => `<button class="ncx-cruiser-size-button" type="button">${size}</button>`)
    .join("");

  document.querySelectorAll(".ncx-cruiser-size-button").forEach((sizeButton) => {
    sizeButton.addEventListener("click", () => {
      document
        .querySelectorAll(".ncx-cruiser-size-button")
        .forEach((button) => button.classList.remove("ncx-cruiser-size-button--selected"));

      sizeButton.classList.add("ncx-cruiser-size-button--selected");

      ncxCruiserSelectedSize = sizeButton.textContent;
      ncxCruiserBagButton.disabled = false;
      ncxCruiserBagButton.textContent = `ADD TO CART — ${ncxCruiserPrice}`;
    });
  });
}

function ncxCruiserChangePhotos(colour) {
  ncxCruiserImages.forEach((image, index) => {
    image.style.opacity = "0";

    setTimeout(() => {
      image.src = ncxCruiserPhotos[colour][index];
      image.alt = `${colour} Canvas Cruiser`;
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
    ncxCruiserColourText.textContent = swatch.dataset.ncxColour;

    ncxCruiserChangePhotos(swatch.dataset.ncxColour);
  });
});

document.querySelectorAll(".ncx-cruiser-size-type").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".ncx-cruiser-size-type")
      .forEach((button) => button.classList.remove("ncx-cruiser-size-type--active"));

    tab.classList.add("ncx-cruiser-size-type--active");
    ncxCruiserBagButton.disabled = true;
    ncxCruiserBagButton.textContent = "Select a Size";

    ncxCruiserRenderSizes(tab.dataset.ncxSizeGroup);
  });
});

ncxCruiserBagButton.addEventListener("click", () => {
  if (ncxCruiserBagButton.disabled || !ncxCruiserSelectedSize) return;

  if (!window.NovartShopCart) {
    console.error("cart.js is not connected or loaded after product.js");
    return;
  }

  const name = document.querySelector(".ncx-cruiser-title").textContent.trim();
  const color = ncxCruiserColourText.textContent.trim();
  const price = Number(ncxCruiserPrice.replace(/[^0-9.]/g, ""));
  const image = ncxCruiserPhotos[color][0];

  window.NovartShopCart.add({
    id: `${name}-${color}-${ncxCruiserSelectedSize}`,
    name: name,
    color: color,
    size: ncxCruiserSelectedSize.trim(),
    price: price,
    image: image,
  });

  ncxCruiserBagButton.textContent = "Added to Bag ✓";

  setTimeout(() => {
    ncxCruiserBagButton.textContent = `ADD TO CART — ${ncxCruiserPrice}`;
  }, 1200);
});

ncxCruiserRenderSizes("men");

const ncxCruiserInitialSwatch = document.querySelector(
  ".ncx-cruiser-swatch--selected"
);

if (ncxCruiserInitialSwatch) {
  ncxCruiserColourText.textContent =
    ncxCruiserInitialSwatch.dataset.ncxColour;
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