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
