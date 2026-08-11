const checkoutCart = JSON.parse(
  localStorage.getItem("novart-shop-cart-v1") || "[]"
);

const checkoutCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const checkoutProducts = document.querySelector("#checkoutProducts");
const checkoutItemCount = document.querySelector("#checkoutItemCount");
const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
const checkoutShipping = document.querySelector("#checkoutShipping");
const checkoutGrandTotal = document.querySelector("#checkoutGrandTotal");

const itemCount = checkoutCart.reduce(
  (total, product) => total + product.quantity,
  0
);

const subtotal = checkoutCart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 5;
const grandTotal = subtotal + shipping;

if (checkoutCart.length === 0) {
  checkoutProducts.innerHTML = `
    <p class="text-secondary text-center py-4">
      Your cart is empty.
    </p>
  `;
} else {
  checkoutProducts.innerHTML = checkoutCart
    .map(
      (product) => `
        <article class="checkout-product">
          <div class="checkout-product-image">
            <img src="${product.image}" alt="${product.name}">
            <span class="checkout-product-quantity">${product.quantity}</span>
          </div>

          <div>
            <div class="checkout-product-name">${product.name}</div>
            <div class="checkout-product-info">${product.color}</div>
            <div class="checkout-product-info">Size: ${product.size}</div>
          </div>

          <strong>${checkoutCurrency.format(product.price * product.quantity)}</strong>
        </article>
      `
    )
    .join("");
}

checkoutItemCount.textContent = itemCount;
checkoutSubtotal.textContent = checkoutCurrency.format(subtotal);
checkoutShipping.textContent =
  shipping === 0 ? "FREE" : checkoutCurrency.format(shipping);
checkoutGrandTotal.textContent = checkoutCurrency.format(grandTotal);

















const paymentRadios = document.querySelectorAll('input[name="payment"]');
const cardFields = document.querySelector("#cardFields");
const paymentMethods = document.querySelectorAll(".payment-method");

function updatePaymentMethod() {
  const selectedRadio = document.querySelector(
    'input[name="payment"]:checked'
  );

  paymentMethods.forEach((method) => {
    method.classList.remove("payment-method--selected");
  });

  selectedRadio
    .closest(".payment-method")
    .classList.add("payment-method--selected");

  cardFields.classList.toggle(
    "d-none",
    selectedRadio.value !== "card"
  );
}

paymentRadios.forEach((radio) => {
  radio.addEventListener("change", updatePaymentMethod);
});

updatePaymentMethod();