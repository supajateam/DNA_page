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

const unlockEl1 = document.getElementById('unlock-el1')
const unlockEl2 = document.getElementById('unlock-el2')

function unlock(el) {
  if (el == 1) {
    unlockEl1.classList.toggle('unlocked')
  }
  if (el == 2) {
    unlockEl2.classList.toggle('unlocked')
  }
}

