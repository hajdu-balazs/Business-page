function hideMenu() {
  let menuOpen = document.querySelector("#toggle").checked;

  if ((menuOpen = true)) {
    document.querySelector("#toggle").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);

// smooth scroll
$(document).ready(function () {
  $("menu a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        150,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
