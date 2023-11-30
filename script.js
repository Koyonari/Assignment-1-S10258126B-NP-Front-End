// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Tours box
const images = ["assets/liveconcert.jpg", "assets/liveconcert2.jpg", "assets/liveconcert3.webp"];
let currentIndex = 0;

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  const sliderImage = document.getElementById("slider-image");
  sliderImage.style.opacity = 0; // Set opacity to 0
  setTimeout(() => {
    sliderImage.src = images[currentIndex];
    sliderImage.style.opacity = 1; // Set opacity to 1 after a short delay
  }, 300);
};