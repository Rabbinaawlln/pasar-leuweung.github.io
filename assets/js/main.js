let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function () {
    menuOpen.classList.toggle('bx-minus-circle');
    menuWrapper.classList.toggle('active');
})


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween:30,
    slidesPerView: "auto",
    keyboard: {
        enabled: true,
      },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
      },
  })
  
  var swiper = new Swiper(".mySwiperTesti", {
    slidesPerView: "auto",
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });