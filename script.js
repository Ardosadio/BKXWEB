// Smooth scrolling for navigation links
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".service a").forEach((link) => {
  link.addEventListener("click", function () {
    const serviceName = this.querySelector("h3").textContent;
    document.getElementById("selected-service").value = serviceName;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
