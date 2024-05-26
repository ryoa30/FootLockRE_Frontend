
document.addEventListener("DOMContentLoaded", function() {
  const gerak = document.querySelector(".gerak");
  const geser = gerak.querySelectorAll(".geser");
  const sebelum = document.querySelector(".sebelum");
  const sesudah = document.querySelector(".sesudah");
  let index = 0;

  function showSlide(index) {
    geser.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function showNextSlide() {
    index++;
    if (index >= geser.length) {
      index = 0;
    }
    showSlide(index);
  }

  function showPrevSlide() {
    index--;
    if (index < 0) {
      index = geser.length - 1;
    }
    showSlide(index);
  }

  sesudah.addEventListener("click", showNextSlide);
  sebelum.addEventListener("click", showPrevSlide);

  showSlide(index);
});
