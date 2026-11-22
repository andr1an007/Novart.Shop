const dropdowns = document.querySelectorAll(".has-mega-menu");
const backdrop = document.querySelector(".menu-backdrop");
const mobileMenuButton = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

let closeTimer;

function openMenu(item) {
  clearTimeout(closeTimer);

  dropdowns.forEach((dropdown) => {
    const isCurrent = dropdown === item;

    dropdown.classList.toggle("is-open", isCurrent);
    dropdown.querySelector(".nav-trigger").setAttribute(
      "aria-expanded",
      isCurrent ? "true" : "false"
    );
  });

  if (window.innerWidth > 768) {
    document.body.classList.add("menu-open");
  }
}

function closeMenus() {
  dropdowns.forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
  });

  document.body.classList.remove("menu-open");
}

function scheduleClose() {
  clearTimeout(closeTimer);

  closeTimer = setTimeout(() => {
    closeMenus();
  }, 150);
}

dropdowns.forEach((item) => {
  const button = item.querySelector(".nav-trigger");

  item.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      openMenu(item);
    }
  });


  item.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      scheduleClose();
    }
  });

  button.addEventListener("click", () => {
    if (window.innerWidth > 768) return;

    const shouldOpen = !item.classList.contains("is-open");

    closeMenus();

    if (shouldOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

backdrop?.addEventListener("click", closeMenus);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenus();
});

mobileMenuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  mobileMenuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");

  if (!isOpen) closeMenus();
});









const track = document.getElementById("bestSellersTrack");
const bestPrev = document.getElementById("bestPrev");
const bestNext = document.getElementById("bestNext");
const scrollAmount = 460;

if (track && bestPrev && bestNext) {
  bestPrev.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  bestNext.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}











const darkModeToggle = document.getElementById("darkModeToggle");

function setDarkMode(isDark) {
  document.documentElement.classList.toggle("dark-mode", isDark);
  localStorage.setItem("darkMode", isDark ? "on" : "off");

  if (darkModeToggle) {
    darkModeToggle.checked = isDark;
  }
}

/* Відновлює тему після перезавантаження */
setDarkMode(localStorage.getItem("darkMode") === "on");

darkModeToggle?.addEventListener("change", () => {
  setDarkMode(darkModeToggle.checked);
});