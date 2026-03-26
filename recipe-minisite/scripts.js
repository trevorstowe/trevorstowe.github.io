const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const submenuToggles = document.querySelectorAll(".submenu-toggle");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
}

submenuToggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      const submenu = this.nextElementSibling;
      submenu.classList.toggle("active");
    }
  });
});
