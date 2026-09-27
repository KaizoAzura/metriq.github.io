const themeButtons = document.querySelectorAll("[data-theme]");

themeButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.stopPropagation();

    // ubah active
    themeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    // ambil theme
    const theme = this.dataset.theme;

    // contoh penerapan
    document.documentElement.setAttribute("data-theme", theme);
  });
});