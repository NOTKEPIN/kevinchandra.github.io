window.addEventListener('scroll', () => {
    document.querySelectorAll('.cbp_tmtimeline li').forEach((el) => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            el.classList.add('in-view');
        } else {
            el.classList.remove('in-view');
        }
    });
});
