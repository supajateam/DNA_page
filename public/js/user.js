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

let unlockEl1 = document.getElementById('unlock-el1')
let unlockEl2 = document.getElementById('unlock-el2')

function unlock(el) {
  if (el == 1) {
    unlockEl1.classList.toggle('unlocked')
  }
  if (el == 2) {
    unlockEl2.classList.toggle('unlocked')
  }
}

var autoHypenPhone = function(str){
  str = str.replace(/[^0-9]/g, '');
  var tmp = '';
  if( str.length < 4){
      return str;
  }else if(str.length < 7){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3);
      return tmp;
  }else if(str.length < 11){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6);
      return tmp;
  }else{              
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 4);
      tmp += '-';
      tmp += str.substr(7);
      return tmp;
  }
  return str;
}

let phoneNum = document.getElementById('phoneNum');

phoneNum.onkeyup = function(){
console.log(this.value);
this.value = autoHypenPhone( this.value ) ;  
}

const input = document.querySelector('#number');
input.addEventListener('keyup', function(e) {
  let value = e.target.value;
  value = Number(value.replaceAll(',', ''));
  if(isNaN(value)) {
    input.value = 0;
  }else {
    const formatValue = value.toLocaleString('ko-KR');
    input.value = formatValue;
  }
})

//유효 기간(연도) select
let date = new Date()
let thisYear = date.getFullYear()

function createYear(count) {
  let position = document.getElementById('year')
  let yearEl = document.createElement('option')

  yearEl.setAttribute('value', thisYear+count)
  yearEl.innerHTML = thisYear+count
  
  position.appendChild(yearEl)
}

for (count = 0; count < 10; count++) {
  createYear(count)
}
