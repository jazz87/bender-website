let carousel, article;
let i = 1;
let totalTime = 0;

window.onload = () => {
  carousel = document.getElementById("carousel");
  article = document.getElementById("article");

  InitArrow("arrow_down", article.getBoundingClientRect().top);
  InitArrow("arrow_up", 0);

  InitCarousel();
  setInterval(ToggleCarousel, 100);
}

function InitCarousel() {
  carousel.style.opacity = 1;
  carousel.src = "carousel/elon" + i + ".jpg";
}

function ToggleCarousel() {
  carousel.style.opacity = carousel.style.opacity - 0.005;
  totalTime+=100;

  if(totalTime>5000) {
    i++;
    i = ( i>3 ? 1 : i );
    totalTime = 0;
    InitCarousel();
  }
}

function InitArrow(elId, scrollToTop) {
  let el = document.getElementById(elId);

  el.onclick = () => {
    window.scrollTo({
      left: 0,
      top: scrollToTop,
      behavior: "smooth"
    });
  }

  el.onmouseover = () => {
    el.style.cursor = "pointer";
  };
}
