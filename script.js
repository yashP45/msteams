document.querySelector(".photo_nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("photo_nav")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
