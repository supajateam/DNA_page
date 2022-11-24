let SwiperTop = new Swiper('.swiper--top', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 5000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: true,
  disableOnInteraction: true
});

let ellipsisEls = document.querySelectorAll('.text-ellipsis')
console.log(ellipsisEls)

function unlock() {
  ellipsisEls.forEach((el) => {
    el.classList.toggle('unlocked')
  });
}

