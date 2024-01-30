let imagineindex = 0;

function changeSlide(index) {
  const slider = document.getElementById("slider");
  slider.scrollTo({
    left: index * slider.clientWidth,
    behavior: "smooth",
  });

  // Opcjonalnie: Zaznacz aktualny element nawigacyjny
  const navElements = document.querySelectorAll(".slider-nav a");
  navElements.forEach((nav, i) => {
    nav.classList.toggle("active", i === index);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  if (leftArrow && rightArrow) {
    leftArrow.addEventListener("click", function () {
      imagineindex = Math.max(imagineindex - 1, 0);
      changeSlide(imagineindex);
    });

    rightArrow.addEventListener("click", function () {
      imagineindex = Math.min(imagineindex + 1, 2);
      changeSlide(imagineindex);
    });
  }
});
