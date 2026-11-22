(() => {
  "use strict";

  const NOVART_CART_STORAGE_KEY = "novart-shop-cart-v1";

  let novartCartItems = [];

  try {
    const savedCart = localStorage.getItem(NOVART_CART_STORAGE_KEY);
    novartCartItems = savedCart ? JSON.parse(savedCart) : [];

    if (!Array.isArray(novartCartItems)) {
      novartCartItems = [];
    }
  } catch {
    novartCartItems = [];
  }

  const novartCartCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const novartCartUi = {
    badge: document.querySelector("#cartBadge"),
    headerCount: document.querySelector("#cartHeaderCount"),
    shippingMessage: document.querySelector("#shippingMessage"),
    shippingProgress: document.querySelector("#shippingProgress"),
    emptyCart: document.querySelector("#emptyCart"),
    filledCart: document.querySelector("#filledCart"),
    items: document.querySelector("#cartItems"),
    subtotal: document.querySelector("#subtotal"),
    shipping: document.querySelector("#shipping"),
    checkoutTotal: document.querySelector("#checkoutTotal"),
    drawer: document.querySelector("#cartDrawer"),
  };

  function novartCartSave() {
    localStorage.setItem(
      NOVART_CART_STORAGE_KEY,
      JSON.stringify(novartCartItems)
    );
  }

  function novartCartGetCount() {
    return novartCartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
  }

  function novartCartGetSubtotal() {
    return novartCartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  function novartCartEscapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function novartCartRender() {
    novartCartSave();

    const count = novartCartGetCount();
    const subtotal = novartCartGetSubtotal();
    const shippingPrice = subtotal === 0 || subtotal >= 100 ? 0 : 5;
    const total = subtotal + shippingPrice;

    if (novartCartUi.badge) {
      novartCartUi.badge.textContent = count;
      novartCartUi.badge.classList.toggle("d-none", count === 0);
    }

    if (novartCartUi.headerCount) {
      novartCartUi.headerCount.textContent = count;
    }

    if (novartCartUi.emptyCart) {
      novartCartUi.emptyCart.classList.toggle("d-none", count > 0);
    }

    if (novartCartUi.filledCart) {
      novartCartUi.filledCart.classList.toggle("d-none", count === 0);
    }

    if (novartCartUi.shippingProgress) {
      const progress = Math.min((subtotal / 100) * 100, 100);
      novartCartUi.shippingProgress.style.width = `${progress}%`;
    }

    if (novartCartUi.shippingMessage) {
      novartCartUi.shippingMessage.textContent =
        subtotal >= 100
          ? "You've earned free shipping!"
          : `Spend ${novartCartCurrency.format(
            100 - subtotal
          )} more to earn free shipping!`;
    }

    if (novartCartUi.items) {
      novartCartUi.items.innerHTML = novartCartItems
        .map((product) => {
          const productId = novartCartEscapeHtml(product.id);

          return `
            <article class="cart-item">
              <img
                src="${novartCartEscapeHtml(product.image)}"
                alt="${novartCartEscapeHtml(product.name)}"
              >

              <div>
                <div class="cart-item-title">
                  ${novartCartEscapeHtml(product.name)}
                </div>

                <div class="cart-item-details">
                  ${novartCartEscapeHtml(product.color)}
                </div>

                <div class="cart-item-details">
                  Size: ${novartCartEscapeHtml(product.size)}
                </div>

                <a href="#" class="remove-item" data-novart-cart-remove="${productId}">
                  Remove
                </a>
              </div>

              <div class="text-end d-flex flex-column justify-content-between">
                <strong>
                  ${novartCartCurrency.format(product.price * product.quantity)}
                </strong>

                <div class="quantity-control">
                  <button
                    type="button"
                    data-novart-cart-change="${productId}"
                    data-novart-cart-amount="-1"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <strong>${product.quantity}</strong>

                  <button
                    type="button"
                    data-novart-cart-change="${productId}"
                    data-novart-cart-amount="1"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          `;
        })
        .join("");
    }

    if (novartCartUi.subtotal) {
      novartCartUi.subtotal.textContent =
        novartCartCurrency.format(subtotal);
    }

    if (novartCartUi.shipping) {
      novartCartUi.shipping.textContent =
        shippingPrice === 0
          ? "FREE"
          : novartCartCurrency.format(shippingPrice);
    }

    if (novartCartUi.checkoutTotal) {
      novartCartUi.checkoutTotal.textContent =
        novartCartCurrency.format(total);
    }
  }

  function novartCartAddProduct(product) {
    const validProduct = {
      id: String(product.id),
      name: String(product.name),
      color: String(product.color),
      size: String(product.size),
      price: Number(product.price),
      image: String(product.image),
    };

    const existingProduct = novartCartItems.find(
      (cartProduct) => cartProduct.id === validProduct.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      novartCartItems.push({
        ...validProduct,
        quantity: 1,
      });
    }

    novartCartRender();

    if (novartCartUi.drawer && window.bootstrap) {
      window.bootstrap.Offcanvas
        .getOrCreateInstance(novartCartUi.drawer)
        .show();
    }
  }

  if (novartCartUi.items) {
    novartCartUi.items.addEventListener("click", (event) => {
      const quantityButton = event.target.closest(
        "[data-novart-cart-change]"
      );

      const removeLink = event.target.closest(
        "[data-novart-cart-remove]"
      );

      if (quantityButton) {
        const productId = quantityButton.dataset.novartCartChange;
        const amount = Number(quantityButton.dataset.novartCartAmount);

        const product = novartCartItems.find(
          (cartProduct) => cartProduct.id === productId
        );

        if (!product) return;

        product.quantity += amount;

        if (product.quantity <= 0) {
          novartCartItems = novartCartItems.filter(
            (cartProduct) => cartProduct.id !== productId
          );
        }

        novartCartRender();
      }

      if (removeLink) {
        event.preventDefault();

        const productId = removeLink.dataset.novartCartRemove;

        novartCartItems = novartCartItems.filter(
          (cartProduct) => cartProduct.id !== productId
        );

        novartCartRender();
      }
    });
  }

  window.NovartShopCart = {
    add: novartCartAddProduct,
    render: novartCartRender,
    getItems: () => [...novartCartItems],
  };

  novartCartRender();
})();