const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().trim();

  productCards.forEach(card => {
    const title = card.querySelector(".product-title").textContent.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block"; // show
    } else {
      card.style.display = "none"; // hide
    }
  });
});
