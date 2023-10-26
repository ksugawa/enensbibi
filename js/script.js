document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu');

    hamburgerBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        hamburgerBtn.classList.toggle('open');
        menu.classList.toggle('panelactive');
    }

    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach((link) => {
        link.addEventListener('click', removePanelActive)
    });

    function removePanelActive() {
        menu.classList.remove('panelactive');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    function animateScrolling() {
        const illustLists = document.querySelectorAll('.illust-list');
        illustLists.forEach((list, index) => {
            const animationDuration = 55000;
            const translateY = index % 2 === 0 ? '100%' : '-100%';

            list.style.animation = `infinity-scroll-${index % 2 === 0 ? 'top' : 'bottom'} ${animationDuration}ms infinite linear 0.5s both`;
            list.style.transform = `translateY(${translateY})`;
        });
    }

    const illustLists = document.querySelectorAll('.illust_list');
    illustLists.forEach((list) => {
        list.addEventListener('mouseenter', () => {
            list.style.animationPlayState = 'paused';
        });

        list.addEventListener('mouseleave', () => {
            list.style.animationPlayState = 'running';
        });
    });

    animateScrolling();
});