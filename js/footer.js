fetch("footer.html")
  .then(response => response.text())
  .then(html => {
    const footer = document.getElementById("footer-placeholder");

    if (footer) {
      footer.innerHTML = html;
    }
  })
  .catch(error => console.error("Footer error:", error));