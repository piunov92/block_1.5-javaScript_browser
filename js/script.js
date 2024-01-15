const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
// const element = document.querySelector('[class*=swiper]');
const element = document.querySelector('.swiper');
if (window.innerWidth > 320) {
    element.classList.remove('swiper');
}