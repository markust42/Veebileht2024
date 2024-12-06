document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll('.pildikarusell');
  carousels.forEach(carousel => {
      const id = carousel.id;
      window[id] = { slideIndex: 1 };
      showSlides(1, id);
  });
});

function plusSlides(n, carouselId) {
  window[carouselId].slideIndex += n;
  showSlides(window[carouselId].slideIndex, carouselId);
}

function showSlides(n, carouselId) {
  let i;
  let carousel = document.getElementById(carouselId);
  let slides = carousel.getElementsByClassName("pilt");
  if (n > slides.length) { window[carouselId].slideIndex = 1 }
  if (n < 1) { window[carouselId].slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[window[carouselId].slideIndex - 1].style.display = "block";
}

// Allikas: https://www.w3schools.com/howto/howto_js_slideshow.asp 
// Kasutasime ka ChatGPT abi, et koodi natuke muuta