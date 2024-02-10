/* Created by Tivotal */

let navItems = document.querySelectorAll(".item");
let indicator = document.querySelector(".indicator");

let activeLink = document.querySelector(".active");
changeIndicator(activeLink);

navItems.forEach((item) =>
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");

    item.classList.add("active");

    changeIndicator(item);
  })
);

function changeIndicator(item) {
  indicator.style.setProperty("--transformJS", `${item.offsetLeft}px`);
  indicator.style.setProperty("--widthJS", `${item.offsetWidth}px`);
}
