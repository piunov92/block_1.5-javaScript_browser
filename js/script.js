let middleScreen = window.matchMedia('(max-width: 767px)');
if (middleScreen.matches) {
    new Swiper('.swiper', {
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
    }); } else {
    document.querySelector('.swiper').classList.remove('swiper');
}

window.onresize = function (event) {
    window.setTimeout('location.reload()', 200);
};

function hideBrand() {
    let element =  document.querySelectorAll('.hidden');
    let text = document.querySelector('.show-cards__title').textContent;
    if (text !== 'Скрыть') {
        document.querySelector('.show-cards__title').textContent = 'Скрыть';
    } else {
        document.querySelector('.show-cards__title').textContent = 'Показать все';
    }
    element.forEach(c => c.classList.toggle('cards__item--show'));
}