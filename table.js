document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.timeline-point');
    if (!points.length) {
        return;
    }

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.88;

        points.forEach(point => {
            const pointTop = point.getBoundingClientRect().top;
            if (pointTop < triggerBottom) {
                point.classList.add('is-visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('resize', revealOnScroll);
    revealOnScroll();
});
