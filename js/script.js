'use strict';
// burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const linkList= document.querySelector('.menu__list');
if(iconMenu){
    iconMenu.addEventListener('click',function(e){
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
iconMenu.addEventListener('click',function(e){
})
linkList.addEventListener('click', function(e){
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    
});

new Swiper('.image-slider',{
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,

    },
    effect: 'cards',
    cardsEffect: {
        rotate: false,
        slideShadows: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
        },
        // when window width is >= 480px
        480: {
        },
        // when window width is >= 640px
        640: {

        }
      },
      grabCursor: true,
});