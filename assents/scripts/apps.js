document.addEventListener("DOMContentLoaded", () => {
  const myObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.1, // Adjust this value to control when the animation triggers
    }
  );

  const elements = document.querySelectorAll(".hidden");

  elements.forEach((element) => myObserver.observe(element));
});
window.onload = function () {
  const mobileMenu = document.querySelector(".mobile");
  const navMenu = document.querySelector(".menu nav ul");
  let isMenuOpen = false;

  mobileMenu.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;
    navMenu.style.display = isMenuOpen ? "flex" : "none";

    // Add smooth transition for menu items
    const menuItems = navMenu.querySelectorAll("li");
    menuItems.forEach((item, index) => {
      item.style.animation = isMenuOpen
        ? `slideIn 0.3s ease forwards ${index * 0.1}s`
        : "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu") && isMenuOpen) {
      isMenuOpen = false;
      navMenu.style.display = "none";
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600 && navMenu.style.display === "none") {
      navMenu.style.display = "flex";
    }
  });
};